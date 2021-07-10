declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  account: AccountAPI;
  transaction: TransactionAPI;
  statistics: StatisticsAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface AccountAPI {
  /**
   * List all accounts
   */
  listAccounts(req: ListAccountsRequest): Promise<ListAccountsResponse>;
  /**
   * Create an account
   */
  createAccount(req: CreateAccountRequest): Promise<CreateAccountResponse>;
  /**
   * Find account by id
   */
  getAccount(req: GetAccountRequest): Promise<GetAccountResponse>;
  /**
   * Update account
   */
  updateAccount(req: UpdateAccountRequest): Promise<UpdateAccountResponse>;
  /**
   *
   */
  deleteAccount(req: DeleteAccountRequest): Promise<void>;
  /**
   * List Transaction by {accountId}
   */
  listAccountTransactions(
    req: ListAccountTransactionsRequest
  ): Promise<ListAccountTransactionsResponse>;
  /**
   * 为 {accountId} 账户充值
   */
  accountRecharge(req: AccountRechargeRequest): Promise<AccountRechargeResponse>;
  /**
   * 为 {accountId} 提现
   */
  accountWithdraw(req: AccountWithdrawRequest): Promise<AccountWithdrawResponse>;
  /**
   * 为 {accountId} 转账
   */
  accountTransfer(req: AccountTransferRequest): Promise<AccountTransferResponse>;
  /**
   * 为 {accountId} 授信
   */
  accountCredit(req: AccountCreditRequest): Promise<AccountCreditResponse>;
  /**
   * Find transaction by accountId &amp; transactionId
   */
  getAccountTransaction(req: GetAccountTransactionRequest): Promise<GetAccountTransactionResponse>;
}
export interface TransactionAPI {
  /**
   * List Transactions
   */
  listTransactions(req: ListTransactionsRequest): Promise<ListTransactionsResponse>;
}
export interface StatisticsAPI {
  /**
   * 统计账户
   */
  statisticAccounts(req: StatisticAccountsRequest): Promise<StatisticAccountsResponse>;
  /**
   * 统计账户
   */
  statisticTransactionByPeriod(
    req: StatisticTransactionByPeriodRequest
  ): Promise<StatisticTransactionByPeriodResponse>;
}

export interface ListAccountsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    type?: string;
    id?: string[];
    tags?: string[];
    owner?: string;
    project?: string;
  };
}
export interface ListAccountsResponse {
  body: ({
    /**
     * 用户或组织
     */
    owner?: string;
    /**
     * 余额，可能是负的
     */
    balance?: number;
    /**
     * 授信额度
     */
    credits?: number;
    /**
     * 累计充值
     */
    totalRecharge?: number;
    /**
     * 累计提现
     */
    totalWithdraw?: number;
    /**
     * 累计转出
     */
    totalTransferOut?: number;
    /**
     * 累计转入
     */
    totalTransferIn?: number;
    /**
     * 所属项目
     */
    project?: string;
    /**
     * 账户类别
     */
    type?: "BUDGET" | "WALLET" | "POINTS";
    /**
     * 应用层自行定义的标签
     */
    tags?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED" | "FROZEN";
    /**
     * 最近更新者
     */
    updateBy?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  })[];
  headers: {
    "x-total-count": number;
  };
}
export interface CreateAccountRequest {
  body: {
    /**
     * 用户或组织
     */
    owner?: string;
    /**
     * 余额，可能是负的
     */
    balance?: number;
    /**
     * 授信额度
     */
    credits?: number;
    /**
     * 累计充值
     */
    totalRecharge?: number;
    /**
     * 累计提现
     */
    totalWithdraw?: number;
    /**
     * 累计转出
     */
    totalTransferOut?: number;
    /**
     * 累计转入
     */
    totalTransferIn?: number;
    /**
     * 所属项目
     */
    project?: string;
    /**
     * 账户类别
     */
    type?: "BUDGET" | "WALLET" | "POINTS";
    /**
     * 应用层自行定义的标签
     */
    tags?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED" | "FROZEN";
    /**
     * 最近更新者
     */
    updateBy?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    /**
     * account's owner
     */
    owner: string;
  };
}
export interface CreateAccountResponse {
  body: {
    /**
     * 用户或组织
     */
    owner?: string;
    /**
     * 余额，可能是负的
     */
    balance?: number;
    /**
     * 授信额度
     */
    credits?: number;
    /**
     * 累计充值
     */
    totalRecharge?: number;
    /**
     * 累计提现
     */
    totalWithdraw?: number;
    /**
     * 累计转出
     */
    totalTransferOut?: number;
    /**
     * 累计转入
     */
    totalTransferIn?: number;
    /**
     * 所属项目
     */
    project?: string;
    /**
     * 账户类别
     */
    type?: "BUDGET" | "WALLET" | "POINTS";
    /**
     * 应用层自行定义的标签
     */
    tags?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED" | "FROZEN";
    /**
     * 最近更新者
     */
    updateBy?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface GetAccountRequest {
  accountId: string;
}
export interface GetAccountResponse {
  body: {
    /**
     * 用户或组织
     */
    owner?: string;
    /**
     * 余额，可能是负的
     */
    balance?: number;
    /**
     * 授信额度
     */
    credits?: number;
    /**
     * 累计充值
     */
    totalRecharge?: number;
    /**
     * 累计提现
     */
    totalWithdraw?: number;
    /**
     * 累计转出
     */
    totalTransferOut?: number;
    /**
     * 累计转入
     */
    totalTransferIn?: number;
    /**
     * 所属项目
     */
    project?: string;
    /**
     * 账户类别
     */
    type?: "BUDGET" | "WALLET" | "POINTS";
    /**
     * 应用层自行定义的标签
     */
    tags?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED" | "FROZEN";
    /**
     * 最近更新者
     */
    updateBy?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface UpdateAccountRequest {
  accountId: string;
  body: {
    /**
     * 用户或组织
     */
    owner?: string;
    /**
     * 余额，可能是负的
     */
    balance?: number;
    /**
     * 授信额度
     */
    credits?: number;
    /**
     * 累计充值
     */
    totalRecharge?: number;
    /**
     * 累计提现
     */
    totalWithdraw?: number;
    /**
     * 累计转出
     */
    totalTransferOut?: number;
    /**
     * 累计转入
     */
    totalTransferIn?: number;
    /**
     * 所属项目
     */
    project?: string;
    /**
     * 账户类别
     */
    type?: "BUDGET" | "WALLET" | "POINTS";
    /**
     * 应用层自行定义的标签
     */
    tags?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED" | "FROZEN";
    /**
     * 最近更新者
     */
    updateBy?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface UpdateAccountResponse {
  body: {
    /**
     * 用户或组织
     */
    owner?: string;
    /**
     * 余额，可能是负的
     */
    balance?: number;
    /**
     * 授信额度
     */
    credits?: number;
    /**
     * 累计充值
     */
    totalRecharge?: number;
    /**
     * 累计提现
     */
    totalWithdraw?: number;
    /**
     * 累计转出
     */
    totalTransferOut?: number;
    /**
     * 累计转入
     */
    totalTransferIn?: number;
    /**
     * 所属项目
     */
    project?: string;
    /**
     * 账户类别
     */
    type?: "BUDGET" | "WALLET" | "POINTS";
    /**
     * 应用层自行定义的标签
     */
    tags?: string[];
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED" | "FROZEN";
    /**
     * 最近更新者
     */
    updateBy?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface DeleteAccountRequest {
  accountId: string;
}
export interface ListAccountTransactionsRequest {
  accountId: string;
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    type?: string[];
    id?: string[];
    refAccount?: string[];
    owner?: string[];
    refOwner?: string[];
    createAt_gte?: Date;
    createAt_lte?: Date;
    updateAt_gte?: Date;
    updateAt_lte?: Date;
  };
}
export interface ListAccountTransactionsResponse {
  body: ({
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  })[];
  headers: {
    "x-total-count": number;
  };
}
export interface AccountRechargeRequest {
  accountId: string;
  body: {
    /**
     * 转账金额
     */
    amount: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 外部唯一标识
     */
    oid?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface AccountRechargeResponse {
  body: {
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface AccountWithdrawRequest {
  accountId: string;
  body: {
    /**
     * 转账金额
     */
    amount: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 外部唯一标识
     */
    oid?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface AccountWithdrawResponse {
  body: {
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface AccountTransferRequest {
  accountId: string;
  body: {
    /**
     * 转账金额
     */
    amount: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 外部唯一标识
     */
    oid?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    /**
     * 入账账户ID
     */
    refAccount: string;
  };
}
export interface AccountTransferResponse {
  body: {
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface AccountCreditRequest {
  accountId: string;
  body: {
    /**
     * 转账金额
     */
    amount: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 外部唯一标识
     */
    oid?: string;
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  };
}
export interface AccountCreditResponse {
  body: {
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface GetAccountTransactionRequest {
  accountId: string;
  transactionId: string;
}
export interface GetAccountTransactionResponse {
  body: {
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  };
}
export interface ListTransactionsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    type?: string[];
    oid?: string;
    id?: string[];
    account?: string;
    refAccount?: string[];
    owner?: string;
    refOwner?: string[];
    createAt_gte?: Date;
    createAt_lte?: Date;
    updateAt_gte?: Date;
    updateAt_lte?: Date;
  };
}
export interface ListTransactionsResponse {
  body: ({
    /**
     * 入账账户
     */
    refAccount?: string;
    /**
     * 出账账户
     */
    account?: string;
    /**
     * 所有者
     */
    owner?: string;
    /**
     * 关联账户所有者
     */
    refOwner?: string;
    /**
     * 金额
     */
    amount?: number;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 关联的外部资源
     */
    oid?: string;
    /**
     * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
     */
    type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
    /**
     * 额外数据
     */
    extra?: {
      key?: string;
      value?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    createAt?: Date;
  } & {
    /**
     * 创建人
     */
    createBy: string;
  })[];
  headers: {
    "x-total-count": number;
  };
}
export interface StatisticAccountsRequest {
  query?: {
    type?: string;
  };
}
export interface StatisticAccountsResponse {
  /**
   * 账户统计
   */
  body: {
    /**
     * 余额总数
     */
    balance?: number;
    /**
     * 信用额度总数
     */
    credits?: number;
    /**
     * 总充值
     */
    totalRecharge?: number;
    /**
     * 总提现
     */
    totalWithdraw?: number;
    /**
     * 总转入
     */
    totalTransferIn?: number;
    /**
     * 总转出
     */
    totalTransferOut?: number;
  };
}
export interface StatisticTransactionByPeriodRequest {
  accountId: string;
  query?: {
    period: "DAY" | "WEEK" | "MONTH" | "YEAR";
    type?: string;
    createAt_gte?: Date;
    createAt_lte?: Date;
  };
}
export interface StatisticTransactionByPeriodResponse {
  /**
   * 交易记录时段统计
   */
  body: {
    /**
     * 时段
     */
    period?: string;
    /**
     * 金额
     */
    amount?: number;
  }[];
}
/**
 * 额外数据
 */
export type Extra = {
  key?: string;
  value?: string;
}[];

export interface AccountDoc {
  /**
   * 用户或组织
   */
  owner?: string;
  /**
   * 余额，可能是负的
   */
  balance?: number;
  /**
   * 授信额度
   */
  credits?: number;
  /**
   * 累计充值
   */
  totalRecharge?: number;
  /**
   * 累计提现
   */
  totalWithdraw?: number;
  /**
   * 累计转出
   */
  totalTransferOut?: number;
  /**
   * 累计转入
   */
  totalTransferIn?: number;
  /**
   * 所属项目
   */
  project?: string;
  /**
   * 账户类别
   */
  type?: "BUDGET" | "WALLET" | "POINTS";
  /**
   * 应用层自行定义的标签
   */
  tags?: string[];
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED" | "FROZEN";
  /**
   * 最近更新者
   */
  updateBy?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

export type AccountCreateDoc = {
  /**
   * 用户或组织
   */
  owner?: string;
  /**
   * 余额，可能是负的
   */
  balance?: number;
  /**
   * 授信额度
   */
  credits?: number;
  /**
   * 累计充值
   */
  totalRecharge?: number;
  /**
   * 累计提现
   */
  totalWithdraw?: number;
  /**
   * 累计转出
   */
  totalTransferOut?: number;
  /**
   * 累计转入
   */
  totalTransferIn?: number;
  /**
   * 所属项目
   */
  project?: string;
  /**
   * 账户类别
   */
  type?: "BUDGET" | "WALLET" | "POINTS";
  /**
   * 应用层自行定义的标签
   */
  tags?: string[];
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED" | "FROZEN";
  /**
   * 最近更新者
   */
  updateBy?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
} & {
  /**
   * account's owner
   */
  owner: string;
};

export type Account = {
  /**
   * 用户或组织
   */
  owner?: string;
  /**
   * 余额，可能是负的
   */
  balance?: number;
  /**
   * 授信额度
   */
  credits?: number;
  /**
   * 累计充值
   */
  totalRecharge?: number;
  /**
   * 累计提现
   */
  totalWithdraw?: number;
  /**
   * 累计转出
   */
  totalTransferOut?: number;
  /**
   * 累计转入
   */
  totalTransferIn?: number;
  /**
   * 所属项目
   */
  project?: string;
  /**
   * 账户类别
   */
  type?: "BUDGET" | "WALLET" | "POINTS";
  /**
   * 应用层自行定义的标签
   */
  tags?: string[];
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED" | "FROZEN";
  /**
   * 最近更新者
   */
  updateBy?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
} & {
  id: string;
  updateAt?: Date;
  createAt?: Date;
} & {
  /**
   * 创建人
   */
  createBy: string;
};

export interface TransactionDoc {
  /**
   * 入账账户
   */
  refAccount?: string;
  /**
   * 出账账户
   */
  account?: string;
  /**
   * 所有者
   */
  owner?: string;
  /**
   * 关联账户所有者
   */
  refOwner?: string;
  /**
   * 金额
   */
  amount?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 关联的外部资源
   */
  oid?: string;
  /**
   * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
   */
  type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

export interface TransactionCreateDoc {
  /**
   * 转账金额
   */
  amount: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 外部唯一标识
   */
  oid?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
}

export type TransactionTransferCreateDoc = {
  /**
   * 转账金额
   */
  amount: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 外部唯一标识
   */
  oid?: string;
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
} & {
  /**
   * 入账账户ID
   */
  refAccount: string;
};

export type Transaction = {
  /**
   * 入账账户
   */
  refAccount?: string;
  /**
   * 出账账户
   */
  account?: string;
  /**
   * 所有者
   */
  owner?: string;
  /**
   * 关联账户所有者
   */
  refOwner?: string;
  /**
   * 金额
   */
  amount?: number;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 关联的外部资源
   */
  oid?: string;
  /**
   * 交易类型， RECHARGE: 充值(没有源账户), WITHDRAW: 提现(没有目的账户), TRANSFER: 转账, CREDIT: 授信(没有目的账户)
   */
  type?: "RECHARGE" | "WITHDRAW" | "TRANSFER" | "CREDIT";
  /**
   * 额外数据
   */
  extra?: {
    key?: string;
    value?: string;
  }[];
} & {
  id: string;
  updateAt?: Date;
  createAt?: Date;
} & {
  /**
   * 创建人
   */
  createBy: string;
};

/**
 * 账户统计
 */
export interface AccountsStat {
  /**
   * 余额总数
   */
  balance?: number;
  /**
   * 信用额度总数
   */
  credits?: number;
  /**
   * 总充值
   */
  totalRecharge?: number;
  /**
   * 总提现
   */
  totalWithdraw?: number;
  /**
   * 总转入
   */
  totalTransferIn?: number;
  /**
   * 总转出
   */
  totalTransferOut?: number;
}

/**
 * 交易记录时段统计
 */
export type TransactionsPeriodStat = {
  /**
   * 时段
   */
  period?: string;
  /**
   * 金额
   */
  amount?: number;
}[];

export interface MongoDefault {
  id: string;
  updateAt?: Date;
  createAt?: Date;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
