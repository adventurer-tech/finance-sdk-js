//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * account's methods
   */
  account = {
    /**
     * List all accounts
     *
     * @param {ListAccountsRequest} req listAccounts request
     * @returns {Promise<ListAccountsResponse>} A paged array of accounts
     */
    listAccounts: req => {
      const { query } = req || {};

      return fetch(`${this.base}/accounts`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create an account
     *
     * @param {CreateAccountRequest} req createAccount request
     * @returns {Promise<CreateAccountResponse>} The Account to be created
     */
    createAccount: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createAccount");

      return fetch(`${this.base}/accounts`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find account by id
     *
     * @param {GetAccountRequest} req getAccount request
     * @returns {Promise<GetAccountResponse>} Expected response to a valid request
     */
    getAccount: req => {
      const { accountId } = req || {};

      if (!accountId) throw new Error("accountId is required for getAccount");

      return fetch(`${this.base}/accounts/${accountId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update account
     *
     * @param {UpdateAccountRequest} req updateAccount request
     * @returns {Promise<UpdateAccountResponse>} The account
     */
    updateAccount: req => {
      const { accountId, body } = req || {};

      if (!accountId)
        throw new Error("accountId is required for updateAccount");
      if (!body) throw new Error("requetBody is required for updateAccount");

      return fetch(`${this.base}/accounts/${accountId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     *
     *
     * @param {DeleteAccountRequest} req deleteAccount request
     */
    deleteAccount: req => {
      const { accountId } = req || {};

      if (!accountId)
        throw new Error("accountId is required for deleteAccount");

      return fetch(`${this.base}/accounts/${accountId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List Transaction by {accountId}
     *
     * @param {ListAccountTransactionsRequest} req listAccountTransactions request
     * @returns {Promise<ListAccountTransactionsResponse>} A paged array of transaction
     */
    listAccountTransactions: req => {
      const { accountId, query } = req || {};

      if (!accountId)
        throw new Error("accountId is required for listAccountTransactions");

      return fetch(`${this.base}/accounts/${accountId}/transactions`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 为 {accountId} 账户充值
     *
     * @param {AccountRechargeRequest} req accountRecharge request
     * @returns {Promise<AccountRechargeResponse>} Expected response to a valid request
     */
    accountRecharge: req => {
      const { accountId, body } = req || {};

      if (!accountId)
        throw new Error("accountId is required for accountRecharge");
      if (!body) throw new Error("requetBody is required for accountRecharge");

      return fetch(`${this.base}/accounts/${accountId}/!recharge`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 为 {accountId} 提现
     *
     * @param {AccountWithdrawRequest} req accountWithdraw request
     * @returns {Promise<AccountWithdrawResponse>} Expected response to a valid request
     */
    accountWithdraw: req => {
      const { accountId, body } = req || {};

      if (!accountId)
        throw new Error("accountId is required for accountWithdraw");
      if (!body) throw new Error("requetBody is required for accountWithdraw");

      return fetch(`${this.base}/accounts/${accountId}/!withdraw`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 为 {accountId} 转账
     *
     * @param {AccountTransferRequest} req accountTransfer request
     * @returns {Promise<AccountTransferResponse>} Expected response to a valid request
     */
    accountTransfer: req => {
      const { accountId, body } = req || {};

      if (!accountId)
        throw new Error("accountId is required for accountTransfer");
      if (!body) throw new Error("requetBody is required for accountTransfer");

      return fetch(`${this.base}/accounts/${accountId}/!transfer`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * 为 {accountId} 授信
     *
     * @param {AccountCreditRequest} req accountCredit request
     * @returns {Promise<AccountCreditResponse>} Expected response to a valid request
     */
    accountCredit: req => {
      const { accountId, body } = req || {};

      if (!accountId)
        throw new Error("accountId is required for accountCredit");
      if (!body) throw new Error("requetBody is required for accountCredit");

      return fetch(`${this.base}/accounts/${accountId}/!credit`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find transaction by accountId &amp; transactionId
     *
     * @param {GetAccountTransactionRequest} req getAccountTransaction request
     * @returns {Promise<GetAccountTransactionResponse>} Expected response to a valid request
     */
    getAccountTransaction: req => {
      const { accountId, transactionId } = req || {};

      if (!accountId)
        throw new Error("accountId is required for getAccountTransaction");
      if (!transactionId)
        throw new Error("transactionId is required for getAccountTransaction");

      return fetch(
        `${this.base}/accounts/${accountId}/transactions/${transactionId}`,
        {
          method: "GET",
          headers: { Authorization: this.auth },
        }
      );
    },
  };
}
