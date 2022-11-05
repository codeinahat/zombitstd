import { OrderType } from '../types/order.t';

/**
 * Exchange interface for BOT
 */
export interface IBotExchange {

    /**
     * ## Exchange Prices
     */
    prices: any;

    /**
     * ## Watches market asset prices.
     * 
     * These exchange function will begin to watch asste/assets price change.
     * @param interval How ofter to check prices in seconds
     * @param id Optional asset id
     * 
     * ### Sample
     * 
     * ``` js
     *  // keep in mind the instanciated class mus implement IBotExchange methods
     *  const xchange: IBotExchange = new ExchangeAPI();
     * 
     *  // if not id is passed it will check all available assets 
     *  // for giving exchange api
     *  const prices = await xchnage.watch_prices<TypeToReturn>(5)
     * 
     *  // if id is specified it will watch price change for just that asset
     *  const prices = await xchnage.watch_prices<TypeToReturn>(5, 'BTC') 
     * 
     *  
     * ```
     * @return Array of Assets and Prices or an Asset and Price
     */
    watch_prices(interval: number, id?: string): Promise<any[] | any>,


    buy_order(type: OrderType, product: string, amount: string, currency?: string): Promise<boolean>,


    sell_order(type: OrderType, product: string, amount: string, currency?: string): Promise<boolean>,

    stop_loss(product: string, amount: string): Promise<boolean>,
}