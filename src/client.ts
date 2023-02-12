export interface client {
  /**
   * @param apiKey The API Key Found in your Dashboard
   */
  apiKey: string;

  /**
   *  @param apiSecret The API Secret Key Found in your Dashboard
   */
  apiSecret: string;

  /**
   * @returns The ready state of the client
   */
  ready: boolean;
}

/**
 * The Webhook Manager Class for configuration
 ```js
import { client } from '@jmservices/sdk';

const manager = new client({
    apiKey: 'apiKey'
});
```
 * 
 * @param apiKey The API Key Found in your Dashboard. (Required)
 * @param apiSecret The API Secret Key Found in your Dashboard. (Not required)
 * 
 * @since 1.0.0
 */
export class client {
  apiKey: string;
  apiSecret: string;

  /**
   * @param {apiKey} apiKey The API Key Found in your Dashboard
   * @param {apiSecret} apiSecret The API Secret Key Found in your Dashboard
   */
  constructor(apiKey: string, apiSecret: string) {
    /**
     * The API Key Found in your Dashboard
     * @param {apiKey} apiKey
     */
    this.apiKey = apiKey;

    /**
     * The API Secret Key Found in your Dashboard
     * @param {apiSecret} apiSecret
     */
    this.apiSecret = apiSecret;


    /**
     * The ready state of the client
     */
    this.ready = true;
  }

  
}
