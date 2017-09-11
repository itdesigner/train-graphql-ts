declare namespace AwsContracts {

  export interface EventRecord {
    EventSource: 'aws:sns' | 'aws:s3'
    EventVersion: string
    EventSubscriptionArn: string
  }
  export interface SnsEventRecord<T> extends EventRecord {
    EventSource: 'aws:sns'
    Sns: SnsPublishedMessage<T>
  }
  /**
   * Message reads as a JSON string body, parsed to Data
   */
  export interface SnsPublishedMessage<TMessageParsed> {
    Type: 'Notification'
    MessageId: string
    TopicArn: string
    Timestamp: string
    Subject: string
    SignatureVersion: string
    Signature: string
    SigningCertUrl: string
    UnsubscribeUrl: string
    Message: string
    MessageAttributes?: any
    /**
     * CUSTOM - Parsed Message from SQSQueueClient implementation
     */
    Data?: TMessageParsed
  }
  export interface SnsPublishedMessages<T> {
    Records: Array<SnsEventRecord<T>>
  }
  /**
   * A Nested EventRecord as the PublishedMessage.Message JSON string
   */
  export interface EventRecordMessage {
    eventSource?: 'aws:sns' | 'aws:s3'
    eventVersion?: string
    awsRegion?: string
    eventTime?: string | Date
    eventName?: string
    userIdentity?: {
      principalId?: string
    }
  }

  export interface S3EventRecordMessage extends EventRecordMessage {
    eventSource: 'aws:s3'
    s3: {
      s3SchemaVersion: string
      configurationId: string
      bucket: {
        name: string
        ownerIdentity?: {
          principalId: string
        }
        arn: string
      },
      object: {
        key: string
        size: number
        eTag: string
        sequencer: string
      }
    }
  }

  /**
   * When S3 Triggers Lambdas, Records: wraps the event messages
   */
  export interface S3EventRecords {
    Records: Array<S3EventRecordMessage>
  }

  export interface FirehoseRecords {
    records: FirehoseRecord[]
  }

  export interface FirehoseRecord {
    recordId: string
    /**
     * base64 encoded data
     */
    data: string
  }

  export interface FirehoseDecodedRecord<T> {
    recordId: string
    /**
     * base64 decoded data
     */
    decoded: T
    error?: any
  }

  export interface FirehoseProcessedRecord {
    recordId: string
    /**
     * base64 encoded data
     */
    data: string
    result: FirehoseResult
  }

  export type FirehoseResult = 'Ok' | 'ProcessingFailed' | 'Dropped'

  export interface FirehoseProcessedRecords {
    records: FirehoseProcessedRecord[]
  }
}

declare namespace AwsLambda {
  export interface Context {
    /**
     * By default, the callback will wait until the Node.js runtime event loop is empty before freezing the process and returning the results to the caller
     * You can set this property to false to request AWS Lambda to freeze the process soon after the callback is called,
     * even if there are events in the event loop.
     * AWS Lambda will freeze the process, any state data and the events in the Node.js event loop (any remaining events in the event loop processed when
     * the Lambda function is called next and if AWS Lambda chooses to use the frozen process)
     */
    callbackWaitsForEmptyEventLoop: boolean
    functionName: string
    functionVersion: string
    invokedFunctionArn: string
    memoryLimitInMB: number
    awsRequestId: string
    logGroupName: string
    logStreamName: string
    identity?: CognitoIdentity
    clientContext?: ClientContext
    getRemainingTimeInMillis (): number
    log (message: string, object: any): void
    fail (message: string): void
    succeed (message: string | object, object?: any): void
  }
  export interface CognitoIdentity {
    cognitoIdentityId: string
    cognitoIdentityPoolId: string
  }
  export interface ClientContext {
    client: ClientContextClient
    Custom?: any
    env: ClientContextEnv
  }
  export interface ClientContextClient {
    installationId: string
    appTitle: string
    appVersionName: string
    appVersionCode: string
    appPackageName: string
  }
  export interface ClientContextEnv {
    platformVersion: string
    platform: string
    make: string
    model: string
    locale: string
  }
}
