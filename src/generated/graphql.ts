import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://meet-javelin-35.hasura.app/v1/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  MatchStatus: any;
  NotificationsFrequency: any;
  NotificationsType: any;
  date: any;
  float8: any;
  jsonb: any;
  smallint: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "MatchStatus". All fields are combined with logical 'AND'. */
export type MatchStatus_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['MatchStatus']>;
  _gt?: InputMaybe<Scalars['MatchStatus']>;
  _gte?: InputMaybe<Scalars['MatchStatus']>;
  _in?: InputMaybe<Array<Scalars['MatchStatus']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['MatchStatus']>;
  _lte?: InputMaybe<Scalars['MatchStatus']>;
  _neq?: InputMaybe<Scalars['MatchStatus']>;
  _nin?: InputMaybe<Array<Scalars['MatchStatus']>>;
};

/** Boolean expression to compare columns of type "NotificationsFrequency". All fields are combined with logical 'AND'. */
export type NotificationsFrequency_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['NotificationsFrequency']>;
  _gt?: InputMaybe<Scalars['NotificationsFrequency']>;
  _gte?: InputMaybe<Scalars['NotificationsFrequency']>;
  _in?: InputMaybe<Array<Scalars['NotificationsFrequency']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['NotificationsFrequency']>;
  _lte?: InputMaybe<Scalars['NotificationsFrequency']>;
  _neq?: InputMaybe<Scalars['NotificationsFrequency']>;
  _nin?: InputMaybe<Array<Scalars['NotificationsFrequency']>>;
};

/** Boolean expression to compare columns of type "NotificationsType". All fields are combined with logical 'AND'. */
export type NotificationsType_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['NotificationsType']>;
  _gt?: InputMaybe<Scalars['NotificationsType']>;
  _gte?: InputMaybe<Scalars['NotificationsType']>;
  _in?: InputMaybe<Array<Scalars['NotificationsType']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['NotificationsType']>;
  _lte?: InputMaybe<Scalars['NotificationsType']>;
  _neq?: InputMaybe<Scalars['NotificationsType']>;
  _nin?: InputMaybe<Array<Scalars['NotificationsType']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/**
 * Auth: Stores user login data within a secure schema.
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type Auth_Users = {
  __typename?: 'auth_users';
  aud?: Maybe<Scalars['String']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  is_super_admin?: Maybe<Scalars['Boolean']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  raw_app_meta_data?: Maybe<Scalars['jsonb']>;
  raw_user_meta_data?: Maybe<Scalars['jsonb']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/**
 * Auth: Stores user login data within a secure schema.
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type Auth_UsersRaw_App_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/**
 * Auth: Stores user login data within a secure schema.
 *
 *
 * columns and relationships of "auth.users"
 *
 */
export type Auth_UsersRaw_User_Meta_DataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.users" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "auth.users" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Append_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  aud?: InputMaybe<String_Comparison_Exp>;
  confirmation_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  confirmation_token?: InputMaybe<String_Comparison_Exp>;
  confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_change?: InputMaybe<String_Comparison_Exp>;
  email_change_confirm_status?: InputMaybe<Smallint_Comparison_Exp>;
  email_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email_change_token_current?: InputMaybe<String_Comparison_Exp>;
  email_change_token_new?: InputMaybe<String_Comparison_Exp>;
  email_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  encrypted_password?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instance_id?: InputMaybe<Uuid_Comparison_Exp>;
  invited_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  is_super_admin?: InputMaybe<Boolean_Comparison_Exp>;
  last_sign_in_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  phone_change?: InputMaybe<String_Comparison_Exp>;
  phone_change_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  phone_change_token?: InputMaybe<String_Comparison_Exp>;
  phone_confirmed_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  raw_app_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  raw_user_meta_data?: InputMaybe<Jsonb_Comparison_Exp>;
  recovery_sent_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  recovery_token?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Auth_Users_Delete_At_Path_Input = {
  raw_app_meta_data?: InputMaybe<Array<Scalars['String']>>;
  raw_user_meta_data?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Auth_Users_Delete_Elem_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['Int']>;
  raw_user_meta_data?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Auth_Users_Delete_Key_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['String']>;
  raw_user_meta_data?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "auth.users" */
export type Auth_Users_Inc_Input = {
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "auth.users" */
export type Auth_Users_Insert_Input = {
  aud?: InputMaybe<Scalars['String']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  aud?: Maybe<Scalars['String']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  aud?: Maybe<Scalars['String']>;
  confirmation_sent_at?: Maybe<Scalars['timestamptz']>;
  confirmation_token?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  email_change?: Maybe<Scalars['String']>;
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
  email_change_sent_at?: Maybe<Scalars['timestamptz']>;
  email_change_token_current?: Maybe<Scalars['String']>;
  email_change_token_new?: Maybe<Scalars['String']>;
  email_confirmed_at?: Maybe<Scalars['timestamptz']>;
  encrypted_password?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instance_id?: Maybe<Scalars['uuid']>;
  invited_at?: Maybe<Scalars['timestamptz']>;
  last_sign_in_at?: Maybe<Scalars['timestamptz']>;
  phone?: Maybe<Scalars['String']>;
  phone_change?: Maybe<Scalars['String']>;
  phone_change_sent_at?: Maybe<Scalars['timestamptz']>;
  phone_change_token?: Maybe<Scalars['String']>;
  phone_confirmed_at?: Maybe<Scalars['timestamptz']>;
  recovery_sent_at?: Maybe<Scalars['timestamptz']>;
  recovery_token?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "auth.users" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};

/** on conflict condition type for table "auth.users" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Auth_Users_Order_By = {
  aud?: InputMaybe<Order_By>;
  confirmation_sent_at?: InputMaybe<Order_By>;
  confirmation_token?: InputMaybe<Order_By>;
  confirmed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_change?: InputMaybe<Order_By>;
  email_change_confirm_status?: InputMaybe<Order_By>;
  email_change_sent_at?: InputMaybe<Order_By>;
  email_change_token_current?: InputMaybe<Order_By>;
  email_change_token_new?: InputMaybe<Order_By>;
  email_confirmed_at?: InputMaybe<Order_By>;
  encrypted_password?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instance_id?: InputMaybe<Order_By>;
  invited_at?: InputMaybe<Order_By>;
  is_super_admin?: InputMaybe<Order_By>;
  last_sign_in_at?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  phone_change?: InputMaybe<Order_By>;
  phone_change_sent_at?: InputMaybe<Order_By>;
  phone_change_token?: InputMaybe<Order_By>;
  phone_confirmed_at?: InputMaybe<Order_By>;
  raw_app_meta_data?: InputMaybe<Order_By>;
  raw_user_meta_data?: InputMaybe<Order_By>;
  recovery_sent_at?: InputMaybe<Order_By>;
  recovery_token?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Auth_Users_Prepend_Input = {
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Auth_Users_Select_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "auth.users" */
export type Auth_Users_Set_Input = {
  aud?: InputMaybe<Scalars['String']>;
  confirmation_sent_at?: InputMaybe<Scalars['timestamptz']>;
  confirmation_token?: InputMaybe<Scalars['String']>;
  confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  email_change?: InputMaybe<Scalars['String']>;
  email_change_confirm_status?: InputMaybe<Scalars['smallint']>;
  email_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  email_change_token_current?: InputMaybe<Scalars['String']>;
  email_change_token_new?: InputMaybe<Scalars['String']>;
  email_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  encrypted_password?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  instance_id?: InputMaybe<Scalars['uuid']>;
  invited_at?: InputMaybe<Scalars['timestamptz']>;
  is_super_admin?: InputMaybe<Scalars['Boolean']>;
  last_sign_in_at?: InputMaybe<Scalars['timestamptz']>;
  phone?: InputMaybe<Scalars['String']>;
  phone_change?: InputMaybe<Scalars['String']>;
  phone_change_sent_at?: InputMaybe<Scalars['timestamptz']>;
  phone_change_token?: InputMaybe<Scalars['String']>;
  phone_confirmed_at?: InputMaybe<Scalars['timestamptz']>;
  raw_app_meta_data?: InputMaybe<Scalars['jsonb']>;
  raw_user_meta_data?: InputMaybe<Scalars['jsonb']>;
  recovery_sent_at?: InputMaybe<Scalars['timestamptz']>;
  recovery_token?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  email_change_confirm_status?: Maybe<Scalars['smallint']>;
};

/** update columns of table "auth.users" */
export enum Auth_Users_Update_Column {
  /** column name */
  Aud = 'aud',
  /** column name */
  ConfirmationSentAt = 'confirmation_sent_at',
  /** column name */
  ConfirmationToken = 'confirmation_token',
  /** column name */
  ConfirmedAt = 'confirmed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailChange = 'email_change',
  /** column name */
  EmailChangeConfirmStatus = 'email_change_confirm_status',
  /** column name */
  EmailChangeSentAt = 'email_change_sent_at',
  /** column name */
  EmailChangeTokenCurrent = 'email_change_token_current',
  /** column name */
  EmailChangeTokenNew = 'email_change_token_new',
  /** column name */
  EmailConfirmedAt = 'email_confirmed_at',
  /** column name */
  EncryptedPassword = 'encrypted_password',
  /** column name */
  Id = 'id',
  /** column name */
  InstanceId = 'instance_id',
  /** column name */
  InvitedAt = 'invited_at',
  /** column name */
  IsSuperAdmin = 'is_super_admin',
  /** column name */
  LastSignInAt = 'last_sign_in_at',
  /** column name */
  Phone = 'phone',
  /** column name */
  PhoneChange = 'phone_change',
  /** column name */
  PhoneChangeSentAt = 'phone_change_sent_at',
  /** column name */
  PhoneChangeToken = 'phone_change_token',
  /** column name */
  PhoneConfirmedAt = 'phone_confirmed_at',
  /** column name */
  RawAppMetaData = 'raw_app_meta_data',
  /** column name */
  RawUserMetaData = 'raw_user_meta_data',
  /** column name */
  RecoverySentAt = 'recovery_sent_at',
  /** column name */
  RecoveryToken = 'recovery_token',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  email_change_confirm_status?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "conversation" */
export type Conversation = {
  __typename?: 'conversation';
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
  /** An object relationship */
  profile: Profile;
  profile1Id: Scalars['Int'];
  profile2Id: Scalars['Int'];
  /** An object relationship */
  profileByProfile2id: Profile;
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "conversation" */
export type ConversationMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "conversation" */
export type ConversationMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** aggregated selection of "conversation" */
export type Conversation_Aggregate = {
  __typename?: 'conversation_aggregate';
  aggregate?: Maybe<Conversation_Aggregate_Fields>;
  nodes: Array<Conversation>;
};

/** aggregate fields of "conversation" */
export type Conversation_Aggregate_Fields = {
  __typename?: 'conversation_aggregate_fields';
  avg?: Maybe<Conversation_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Conversation_Max_Fields>;
  min?: Maybe<Conversation_Min_Fields>;
  stddev?: Maybe<Conversation_Stddev_Fields>;
  stddev_pop?: Maybe<Conversation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Conversation_Stddev_Samp_Fields>;
  sum?: Maybe<Conversation_Sum_Fields>;
  var_pop?: Maybe<Conversation_Var_Pop_Fields>;
  var_samp?: Maybe<Conversation_Var_Samp_Fields>;
  variance?: Maybe<Conversation_Variance_Fields>;
};


/** aggregate fields of "conversation" */
export type Conversation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Conversation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "conversation" */
export type Conversation_Aggregate_Order_By = {
  avg?: InputMaybe<Conversation_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Conversation_Max_Order_By>;
  min?: InputMaybe<Conversation_Min_Order_By>;
  stddev?: InputMaybe<Conversation_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Conversation_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Conversation_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Conversation_Sum_Order_By>;
  var_pop?: InputMaybe<Conversation_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Conversation_Var_Samp_Order_By>;
  variance?: InputMaybe<Conversation_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "conversation" */
export type Conversation_Arr_Rel_Insert_Input = {
  data: Array<Conversation_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};

/** aggregate avg on columns */
export type Conversation_Avg_Fields = {
  __typename?: 'conversation_avg_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "conversation" */
export type Conversation_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "conversation". All fields are combined with a logical 'AND'. */
export type Conversation_Bool_Exp = {
  _and?: InputMaybe<Array<Conversation_Bool_Exp>>;
  _not?: InputMaybe<Conversation_Bool_Exp>;
  _or?: InputMaybe<Array<Conversation_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  messages?: InputMaybe<Message_Bool_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profile1Id?: InputMaybe<Int_Comparison_Exp>;
  profile2Id?: InputMaybe<Int_Comparison_Exp>;
  profileByProfile2id?: InputMaybe<Profile_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "conversation" */
export enum Conversation_Constraint {
  /** unique or primary key constraint */
  ConversationPkey = 'conversation_pkey',
  /** unique or primary key constraint */
  ConversationProfile1IdProfile2IdKey = 'conversation_profile1Id_profile2Id_key'
}

/** input type for incrementing numeric columns in table "conversation" */
export type Conversation_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  profile1Id?: InputMaybe<Scalars['Int']>;
  profile2Id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "conversation" */
export type Conversation_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profile1Id?: InputMaybe<Scalars['Int']>;
  profile2Id?: InputMaybe<Scalars['Int']>;
  profileByProfile2id?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Conversation_Max_Fields = {
  __typename?: 'conversation_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  profile1Id?: Maybe<Scalars['Int']>;
  profile2Id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "conversation" */
export type Conversation_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Conversation_Min_Fields = {
  __typename?: 'conversation_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  profile1Id?: Maybe<Scalars['Int']>;
  profile2Id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "conversation" */
export type Conversation_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "conversation" */
export type Conversation_Mutation_Response = {
  __typename?: 'conversation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversation>;
};

/** input type for inserting object relation for remote table "conversation" */
export type Conversation_Obj_Rel_Insert_Input = {
  data: Conversation_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};

/** on conflict condition type for table "conversation" */
export type Conversation_On_Conflict = {
  constraint: Conversation_Constraint;
  update_columns?: Array<Conversation_Update_Column>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};

/** Ordering options when selecting data from "conversation". */
export type Conversation_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
  profileByProfile2id?: InputMaybe<Profile_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: conversation */
export type Conversation_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "conversation" */
export enum Conversation_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile1Id = 'profile1Id',
  /** column name */
  Profile2Id = 'profile2Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "conversation" */
export type Conversation_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  profile1Id?: InputMaybe<Scalars['Int']>;
  profile2Id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Conversation_Stddev_Fields = {
  __typename?: 'conversation_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "conversation" */
export type Conversation_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Conversation_Stddev_Pop_Fields = {
  __typename?: 'conversation_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "conversation" */
export type Conversation_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Conversation_Stddev_Samp_Fields = {
  __typename?: 'conversation_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "conversation" */
export type Conversation_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Conversation_Sum_Fields = {
  __typename?: 'conversation_sum_fields';
  id?: Maybe<Scalars['Int']>;
  profile1Id?: Maybe<Scalars['Int']>;
  profile2Id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "conversation" */
export type Conversation_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** update columns of table "conversation" */
export enum Conversation_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Profile1Id = 'profile1Id',
  /** column name */
  Profile2Id = 'profile2Id',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Conversation_Var_Pop_Fields = {
  __typename?: 'conversation_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "conversation" */
export type Conversation_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Conversation_Var_Samp_Fields = {
  __typename?: 'conversation_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "conversation" */
export type Conversation_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Conversation_Variance_Fields = {
  __typename?: 'conversation_variance_fields';
  id?: Maybe<Scalars['Float']>;
  profile1Id?: Maybe<Scalars['Float']>;
  profile2Id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "conversation" */
export type Conversation_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  profile1Id?: InputMaybe<Order_By>;
  profile2Id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "match" */
export type Match = {
  __typename?: 'match';
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  order?: Maybe<Scalars['Int']>;
  /** An object relationship */
  profile: Profile;
  /** An object relationship */
  profileByRequesterid: Profile;
  requesteeId: Scalars['Int'];
  requesteeMessage?: Maybe<Scalars['String']>;
  requesterId: Scalars['Int'];
  requesterMessage?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['MatchStatus']>;
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "match" */
export type Match_Aggregate = {
  __typename?: 'match_aggregate';
  aggregate?: Maybe<Match_Aggregate_Fields>;
  nodes: Array<Match>;
};

/** aggregate fields of "match" */
export type Match_Aggregate_Fields = {
  __typename?: 'match_aggregate_fields';
  avg?: Maybe<Match_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Match_Max_Fields>;
  min?: Maybe<Match_Min_Fields>;
  stddev?: Maybe<Match_Stddev_Fields>;
  stddev_pop?: Maybe<Match_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Match_Stddev_Samp_Fields>;
  sum?: Maybe<Match_Sum_Fields>;
  var_pop?: Maybe<Match_Var_Pop_Fields>;
  var_samp?: Maybe<Match_Var_Samp_Fields>;
  variance?: Maybe<Match_Variance_Fields>;
};


/** aggregate fields of "match" */
export type Match_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Match_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "match" */
export type Match_Aggregate_Order_By = {
  avg?: InputMaybe<Match_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Match_Max_Order_By>;
  min?: InputMaybe<Match_Min_Order_By>;
  stddev?: InputMaybe<Match_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Match_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Match_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Match_Sum_Order_By>;
  var_pop?: InputMaybe<Match_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Match_Var_Samp_Order_By>;
  variance?: InputMaybe<Match_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "match" */
export type Match_Arr_Rel_Insert_Input = {
  data: Array<Match_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Match_On_Conflict>;
};

/** aggregate avg on columns */
export type Match_Avg_Fields = {
  __typename?: 'match_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "match" */
export type Match_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "match". All fields are combined with a logical 'AND'. */
export type Match_Bool_Exp = {
  _and?: InputMaybe<Array<Match_Bool_Exp>>;
  _not?: InputMaybe<Match_Bool_Exp>;
  _or?: InputMaybe<Array<Match_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileByRequesterid?: InputMaybe<Profile_Bool_Exp>;
  requesteeId?: InputMaybe<Int_Comparison_Exp>;
  requesteeMessage?: InputMaybe<String_Comparison_Exp>;
  requesterId?: InputMaybe<Int_Comparison_Exp>;
  requesterMessage?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<MatchStatus_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "match" */
export enum Match_Constraint {
  /** unique or primary key constraint */
  MatchPkey = 'match_pkey',
  /** unique or primary key constraint */
  MatchRequesterIdRequesteeIdKey = 'match_requesterId_requesteeId_key'
}

/** input type for incrementing numeric columns in table "match" */
export type Match_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  requesteeId?: InputMaybe<Scalars['Int']>;
  requesterId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "match" */
export type Match_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileByRequesterid?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  requesteeId?: InputMaybe<Scalars['Int']>;
  requesteeMessage?: InputMaybe<Scalars['String']>;
  requesterId?: InputMaybe<Scalars['Int']>;
  requesterMessage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['MatchStatus']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Match_Max_Fields = {
  __typename?: 'match_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  requesteeId?: Maybe<Scalars['Int']>;
  requesteeMessage?: Maybe<Scalars['String']>;
  requesterId?: Maybe<Scalars['Int']>;
  requesterMessage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "match" */
export type Match_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesteeMessage?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
  requesterMessage?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Min_Fields = {
  __typename?: 'match_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  requesteeId?: Maybe<Scalars['Int']>;
  requesteeMessage?: Maybe<Scalars['String']>;
  requesterId?: Maybe<Scalars['Int']>;
  requesterMessage?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "match" */
export type Match_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesteeMessage?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
  requesterMessage?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "match" */
export type Match_Mutation_Response = {
  __typename?: 'match_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Match>;
};

/** on conflict condition type for table "match" */
export type Match_On_Conflict = {
  constraint: Match_Constraint;
  update_columns?: Array<Match_Update_Column>;
  where?: InputMaybe<Match_Bool_Exp>;
};

/** Ordering options when selecting data from "match". */
export type Match_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileByRequesterid?: InputMaybe<Profile_Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesteeMessage?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
  requesterMessage?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match */
export type Match_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "match" */
export enum Match_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  RequesteeId = 'requesteeId',
  /** column name */
  RequesteeMessage = 'requesteeMessage',
  /** column name */
  RequesterId = 'requesterId',
  /** column name */
  RequesterMessage = 'requesterMessage',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "match" */
export type Match_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  requesteeId?: InputMaybe<Scalars['Int']>;
  requesteeMessage?: InputMaybe<Scalars['String']>;
  requesterId?: InputMaybe<Scalars['Int']>;
  requesterMessage?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['MatchStatus']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Match_Stddev_Fields = {
  __typename?: 'match_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "match" */
export type Match_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Match_Stddev_Pop_Fields = {
  __typename?: 'match_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "match" */
export type Match_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Match_Stddev_Samp_Fields = {
  __typename?: 'match_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "match" */
export type Match_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Match_Sum_Fields = {
  __typename?: 'match_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  requesteeId?: Maybe<Scalars['Int']>;
  requesterId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "match" */
export type Match_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** update columns of table "match" */
export enum Match_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  RequesteeId = 'requesteeId',
  /** column name */
  RequesteeMessage = 'requesteeMessage',
  /** column name */
  RequesterId = 'requesterId',
  /** column name */
  RequesterMessage = 'requesterMessage',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Match_Var_Pop_Fields = {
  __typename?: 'match_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "match" */
export type Match_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Match_Var_Samp_Fields = {
  __typename?: 'match_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "match" */
export type Match_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Match_Variance_Fields = {
  __typename?: 'match_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  requesteeId?: Maybe<Scalars['Float']>;
  requesterId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "match" */
export type Match_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  requesteeId?: InputMaybe<Order_By>;
  requesterId?: InputMaybe<Order_By>;
};

/** columns and relationships of "message" */
export type Message = {
  __typename?: 'message';
  body: Scalars['String'];
  /** An object relationship */
  conversation: Conversation;
  conversationId: Scalars['Int'];
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  isMatchMessage?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  profile: Profile;
  readAt?: Maybe<Scalars['timestamp']>;
  senderId: Scalars['Int'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: 'message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: 'message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg?: InputMaybe<Message_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Message_Max_Order_By>;
  min?: InputMaybe<Message_Min_Order_By>;
  stddev?: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Message_Sum_Order_By>;
  var_pop?: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Message_Var_Samp_Order_By>;
  variance?: InputMaybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'message_avg_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  body?: InputMaybe<String_Comparison_Exp>;
  conversation?: InputMaybe<Conversation_Bool_Exp>;
  conversationId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  isMatchMessage?: InputMaybe<Boolean_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  readAt?: InputMaybe<Timestamp_Comparison_Exp>;
  senderId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint */
  MessagePkey = 'message_pkey'
}

/** input type for incrementing numeric columns in table "message" */
export type Message_Inc_Input = {
  conversationId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  senderId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  body?: InputMaybe<Scalars['String']>;
  conversation?: InputMaybe<Conversation_Obj_Rel_Insert_Input>;
  conversationId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  isMatchMessage?: InputMaybe<Scalars['Boolean']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  readAt?: InputMaybe<Scalars['timestamp']>;
  senderId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'message_max_fields';
  body?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  readAt?: Maybe<Scalars['timestamp']>;
  senderId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  body?: InputMaybe<Order_By>;
  conversationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  readAt?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'message_min_fields';
  body?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  readAt?: Maybe<Scalars['timestamp']>;
  senderId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  body?: InputMaybe<Order_By>;
  conversationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  readAt?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: 'message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  body?: InputMaybe<Order_By>;
  conversation?: InputMaybe<Conversation_Order_By>;
  conversationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isMatchMessage?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  readAt?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: message */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsMatchMessage = 'isMatchMessage',
  /** column name */
  ReadAt = 'readAt',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  body?: InputMaybe<Scalars['String']>;
  conversationId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  isMatchMessage?: InputMaybe<Scalars['Boolean']>;
  readAt?: InputMaybe<Scalars['timestamp']>;
  senderId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'message_stddev_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'message_stddev_pop_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'message_stddev_samp_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'message_sum_fields';
  conversationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  senderId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  Body = 'body',
  /** column name */
  ConversationId = 'conversationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsMatchMessage = 'isMatchMessage',
  /** column name */
  ReadAt = 'readAt',
  /** column name */
  SenderId = 'senderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'message_var_pop_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'message_var_samp_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'message_variance_fields';
  conversationId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  senderId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  conversationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  senderId?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.users" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "conversation" */
  delete_conversation?: Maybe<Conversation_Mutation_Response>;
  /** delete single row from the table: "conversation" */
  delete_conversation_by_pk?: Maybe<Conversation>;
  /** delete data from the table: "match" */
  delete_match?: Maybe<Match_Mutation_Response>;
  /** delete single row from the table: "match" */
  delete_match_by_pk?: Maybe<Match>;
  /** delete data from the table: "message" */
  delete_message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk?: Maybe<Message>;
  /** delete data from the table: "photo" */
  delete_photo?: Maybe<Photo_Mutation_Response>;
  /** delete single row from the table: "photo" */
  delete_photo_by_pk?: Maybe<Photo>;
  /** delete data from the table: "profile" */
  delete_profile?: Maybe<Profile_Mutation_Response>;
  /** delete single row from the table: "profile" */
  delete_profile_by_pk?: Maybe<Profile>;
  /** delete data from the table: "prompt" */
  delete_prompt?: Maybe<Prompt_Mutation_Response>;
  /** delete single row from the table: "prompt" */
  delete_prompt_by_pk?: Maybe<Prompt>;
  /** insert data into the table: "auth.users" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "conversation" */
  insert_conversation?: Maybe<Conversation_Mutation_Response>;
  /** insert a single row into the table: "conversation" */
  insert_conversation_one?: Maybe<Conversation>;
  /** insert data into the table: "match" */
  insert_match?: Maybe<Match_Mutation_Response>;
  /** insert a single row into the table: "match" */
  insert_match_one?: Maybe<Match>;
  /** insert data into the table: "message" */
  insert_message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one?: Maybe<Message>;
  /** insert data into the table: "photo" */
  insert_photo?: Maybe<Photo_Mutation_Response>;
  /** insert a single row into the table: "photo" */
  insert_photo_one?: Maybe<Photo>;
  /** insert data into the table: "profile" */
  insert_profile?: Maybe<Profile_Mutation_Response>;
  /** insert a single row into the table: "profile" */
  insert_profile_one?: Maybe<Profile>;
  /** insert data into the table: "prompt" */
  insert_prompt?: Maybe<Prompt_Mutation_Response>;
  /** insert a single row into the table: "prompt" */
  insert_prompt_one?: Maybe<Prompt>;
  /** update data of the table: "auth.users" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "conversation" */
  update_conversation?: Maybe<Conversation_Mutation_Response>;
  /** update single row of the table: "conversation" */
  update_conversation_by_pk?: Maybe<Conversation>;
  /** update data of the table: "match" */
  update_match?: Maybe<Match_Mutation_Response>;
  /** update single row of the table: "match" */
  update_match_by_pk?: Maybe<Match>;
  /** update data of the table: "message" */
  update_message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk?: Maybe<Message>;
  /** update data of the table: "photo" */
  update_photo?: Maybe<Photo_Mutation_Response>;
  /** update single row of the table: "photo" */
  update_photo_by_pk?: Maybe<Photo>;
  /** update data of the table: "profile" */
  update_profile?: Maybe<Profile_Mutation_Response>;
  /** update single row of the table: "profile" */
  update_profile_by_pk?: Maybe<Profile>;
  /** update data of the table: "prompt" */
  update_prompt?: Maybe<Prompt_Mutation_Response>;
  /** update single row of the table: "prompt" */
  update_prompt_by_pk?: Maybe<Prompt>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ConversationArgs = {
  where: Conversation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conversation_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MatchArgs = {
  where: Match_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Match_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PhotoArgs = {
  where: Photo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Photo_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProfileArgs = {
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profile_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PromptArgs = {
  where: Prompt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prompt_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConversationArgs = {
  objects: Array<Conversation_Insert_Input>;
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conversation_OneArgs = {
  object: Conversation_Insert_Input;
  on_conflict?: InputMaybe<Conversation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MatchArgs = {
  objects: Array<Match_Insert_Input>;
  on_conflict?: InputMaybe<Match_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Match_OneArgs = {
  object: Match_Insert_Input;
  on_conflict?: InputMaybe<Match_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhotoArgs = {
  objects: Array<Photo_Insert_Input>;
  on_conflict?: InputMaybe<Photo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Photo_OneArgs = {
  object: Photo_Insert_Input;
  on_conflict?: InputMaybe<Photo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProfileArgs = {
  objects: Array<Profile_Insert_Input>;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profile_OneArgs = {
  object: Profile_Insert_Input;
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PromptArgs = {
  objects: Array<Prompt_Insert_Input>;
  on_conflict?: InputMaybe<Prompt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompt_OneArgs = {
  object: Prompt_Insert_Input;
  on_conflict?: InputMaybe<Prompt_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _append?: InputMaybe<Auth_Users_Append_Input>;
  _delete_at_path?: InputMaybe<Auth_Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Auth_Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Auth_Users_Delete_Key_Input>;
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _prepend?: InputMaybe<Auth_Users_Prepend_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ConversationArgs = {
  _inc?: InputMaybe<Conversation_Inc_Input>;
  _set?: InputMaybe<Conversation_Set_Input>;
  where: Conversation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conversation_By_PkArgs = {
  _inc?: InputMaybe<Conversation_Inc_Input>;
  _set?: InputMaybe<Conversation_Set_Input>;
  pk_columns: Conversation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MatchArgs = {
  _inc?: InputMaybe<Match_Inc_Input>;
  _set?: InputMaybe<Match_Set_Input>;
  where: Match_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Match_By_PkArgs = {
  _inc?: InputMaybe<Match_Inc_Input>;
  _set?: InputMaybe<Match_Set_Input>;
  pk_columns: Match_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PhotoArgs = {
  _inc?: InputMaybe<Photo_Inc_Input>;
  _set?: InputMaybe<Photo_Set_Input>;
  where: Photo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Photo_By_PkArgs = {
  _inc?: InputMaybe<Photo_Inc_Input>;
  _set?: InputMaybe<Photo_Set_Input>;
  pk_columns: Photo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProfileArgs = {
  _inc?: InputMaybe<Profile_Inc_Input>;
  _set?: InputMaybe<Profile_Set_Input>;
  where: Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profile_By_PkArgs = {
  _inc?: InputMaybe<Profile_Inc_Input>;
  _set?: InputMaybe<Profile_Set_Input>;
  pk_columns: Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PromptArgs = {
  _inc?: InputMaybe<Prompt_Inc_Input>;
  _set?: InputMaybe<Prompt_Set_Input>;
  where: Prompt_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_By_PkArgs = {
  _inc?: InputMaybe<Prompt_Inc_Input>;
  _set?: InputMaybe<Prompt_Set_Input>;
  pk_columns: Prompt_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "photo" */
export type Photo = {
  __typename?: 'photo';
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  /** An object relationship */
  profile: Profile;
  profileId: Scalars['Int'];
  updatedAt: Scalars['timestamp'];
  url: Scalars['String'];
};

/** aggregated selection of "photo" */
export type Photo_Aggregate = {
  __typename?: 'photo_aggregate';
  aggregate?: Maybe<Photo_Aggregate_Fields>;
  nodes: Array<Photo>;
};

/** aggregate fields of "photo" */
export type Photo_Aggregate_Fields = {
  __typename?: 'photo_aggregate_fields';
  avg?: Maybe<Photo_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Photo_Max_Fields>;
  min?: Maybe<Photo_Min_Fields>;
  stddev?: Maybe<Photo_Stddev_Fields>;
  stddev_pop?: Maybe<Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Photo_Stddev_Samp_Fields>;
  sum?: Maybe<Photo_Sum_Fields>;
  var_pop?: Maybe<Photo_Var_Pop_Fields>;
  var_samp?: Maybe<Photo_Var_Samp_Fields>;
  variance?: Maybe<Photo_Variance_Fields>;
};


/** aggregate fields of "photo" */
export type Photo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "photo" */
export type Photo_Aggregate_Order_By = {
  avg?: InputMaybe<Photo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Photo_Max_Order_By>;
  min?: InputMaybe<Photo_Min_Order_By>;
  stddev?: InputMaybe<Photo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Photo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Photo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Photo_Sum_Order_By>;
  var_pop?: InputMaybe<Photo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Photo_Var_Samp_Order_By>;
  variance?: InputMaybe<Photo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "photo" */
export type Photo_Arr_Rel_Insert_Input = {
  data: Array<Photo_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Photo_On_Conflict>;
};

/** aggregate avg on columns */
export type Photo_Avg_Fields = {
  __typename?: 'photo_avg_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "photo" */
export type Photo_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "photo". All fields are combined with a logical 'AND'. */
export type Photo_Bool_Exp = {
  _and?: InputMaybe<Array<Photo_Bool_Exp>>;
  _not?: InputMaybe<Photo_Bool_Exp>;
  _or?: InputMaybe<Array<Photo_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Int_Comparison_Exp>;
  profile?: InputMaybe<Profile_Bool_Exp>;
  profileId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "photo" */
export enum Photo_Constraint {
  /** unique or primary key constraint */
  PhotoPkey = 'photo_pkey'
}

/** input type for incrementing numeric columns in table "photo" */
export type Photo_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  profileId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "photo" */
export type Photo_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  profile?: InputMaybe<Profile_Obj_Rel_Insert_Input>;
  profileId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Photo_Max_Fields = {
  __typename?: 'photo_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  profileId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "photo" */
export type Photo_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Photo_Min_Fields = {
  __typename?: 'photo_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  profileId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "photo" */
export type Photo_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "photo" */
export type Photo_Mutation_Response = {
  __typename?: 'photo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Photo>;
};

/** on conflict condition type for table "photo" */
export type Photo_On_Conflict = {
  constraint: Photo_Constraint;
  update_columns?: Array<Photo_Update_Column>;
  where?: InputMaybe<Photo_Bool_Exp>;
};

/** Ordering options when selecting data from "photo". */
export type Photo_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profile?: InputMaybe<Profile_Order_By>;
  profileId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: photo */
export type Photo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "photo" */
export enum Photo_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "photo" */
export type Photo_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['Int']>;
  profileId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Photo_Stddev_Fields = {
  __typename?: 'photo_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "photo" */
export type Photo_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Photo_Stddev_Pop_Fields = {
  __typename?: 'photo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "photo" */
export type Photo_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Photo_Stddev_Samp_Fields = {
  __typename?: 'photo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "photo" */
export type Photo_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Photo_Sum_Fields = {
  __typename?: 'photo_sum_fields';
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  profileId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "photo" */
export type Photo_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** update columns of table "photo" */
export enum Photo_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  ProfileId = 'profileId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Photo_Var_Pop_Fields = {
  __typename?: 'photo_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "photo" */
export type Photo_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Photo_Var_Samp_Fields = {
  __typename?: 'photo_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "photo" */
export type Photo_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Photo_Variance_Fields = {
  __typename?: 'photo_variance_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  profileId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "photo" */
export type Photo_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  profileId?: InputMaybe<Order_By>;
};

/** columns and relationships of "profile" */
export type Profile = {
  __typename?: 'profile';
  active: Scalars['Boolean'];
  airtableId?: Maybe<Scalars['String']>;
  alias: Scalars['String'];
  angel: Scalars['Boolean'];
  answer1?: Maybe<Scalars['String']>;
  answer2?: Maybe<Scalars['String']>;
  answer3?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  ccHash?: Maybe<Scalars['String']>;
  ccLastFour?: Maybe<Scalars['String']>;
  ccType?: Maybe<Scalars['String']>;
  children?: Maybe<Scalars['String']>;
  /** An array relationship */
  conversations: Array<Conversation>;
  /** An array relationship */
  conversationsByProfile2id: Array<Conversation>;
  /** An aggregate relationship */
  conversationsByProfile2id_aggregate: Conversation_Aggregate;
  /** An aggregate relationship */
  conversations_aggregate: Conversation_Aggregate;
  createdAt: Scalars['timestamp'];
  dob?: Maybe<Scalars['date']>;
  editorsNote?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  industry?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  location?: Maybe<Scalars['String']>;
  /** An array relationship */
  matches: Array<Match>;
  /** An array relationship */
  matchesByRequesterid: Array<Match>;
  /** An aggregate relationship */
  matchesByRequesterid_aggregate: Match_Aggregate;
  /** An aggregate relationship */
  matches_aggregate: Match_Aggregate;
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
  notifications_frequency: Scalars['NotificationsFrequency'];
  notifications_type: Scalars['NotificationsType'];
  phone?: Maybe<Scalars['String']>;
  /** An array relationship */
  photos: Array<Photo>;
  /** An aggregate relationship */
  photos_aggregate: Photo_Aggregate;
  /** An object relationship */
  prompt?: Maybe<Prompt>;
  prompt1Id?: Maybe<Scalars['Int']>;
  prompt2Id?: Maybe<Scalars['Int']>;
  prompt3Id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  promptByPrompt2id?: Maybe<Prompt>;
  /** An object relationship */
  promptByPrompt3id?: Maybe<Prompt>;
  relnStatus?: Maybe<Scalars['String']>;
  sexuality?: Maybe<Scalars['String']>;
  timezone: Scalars['String'];
  updatedAt: Scalars['timestamp'];
  /** An object relationship */
  user?: Maybe<Auth_Users>;
  userId?: Maybe<Scalars['uuid']>;
  verified: Scalars['Boolean'];
};


/** columns and relationships of "profile" */
export type ProfileConversationsArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileConversationsByProfile2idArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileConversationsByProfile2id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileConversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileMatchesArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileMatchesByRequesteridArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileMatchesByRequesterid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileMessagesArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfileMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfilePhotosArgs = {
  distinct_on?: InputMaybe<Array<Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Order_By>>;
  where?: InputMaybe<Photo_Bool_Exp>;
};


/** columns and relationships of "profile" */
export type ProfilePhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Order_By>>;
  where?: InputMaybe<Photo_Bool_Exp>;
};

/** aggregated selection of "profile" */
export type Profile_Aggregate = {
  __typename?: 'profile_aggregate';
  aggregate?: Maybe<Profile_Aggregate_Fields>;
  nodes: Array<Profile>;
};

/** aggregate fields of "profile" */
export type Profile_Aggregate_Fields = {
  __typename?: 'profile_aggregate_fields';
  avg?: Maybe<Profile_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profile_Max_Fields>;
  min?: Maybe<Profile_Min_Fields>;
  stddev?: Maybe<Profile_Stddev_Fields>;
  stddev_pop?: Maybe<Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profile_Stddev_Samp_Fields>;
  sum?: Maybe<Profile_Sum_Fields>;
  var_pop?: Maybe<Profile_Var_Pop_Fields>;
  var_samp?: Maybe<Profile_Var_Samp_Fields>;
  variance?: Maybe<Profile_Variance_Fields>;
};


/** aggregate fields of "profile" */
export type Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "profile" */
export type Profile_Aggregate_Order_By = {
  avg?: InputMaybe<Profile_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Profile_Max_Order_By>;
  min?: InputMaybe<Profile_Min_Order_By>;
  stddev?: InputMaybe<Profile_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Profile_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Profile_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Profile_Sum_Order_By>;
  var_pop?: InputMaybe<Profile_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Profile_Var_Samp_Order_By>;
  variance?: InputMaybe<Profile_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "profile" */
export type Profile_Arr_Rel_Insert_Input = {
  data: Array<Profile_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** aggregate avg on columns */
export type Profile_Avg_Fields = {
  __typename?: 'profile_avg_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "profile" */
export type Profile_Avg_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "profile". All fields are combined with a logical 'AND'. */
export type Profile_Bool_Exp = {
  _and?: InputMaybe<Array<Profile_Bool_Exp>>;
  _not?: InputMaybe<Profile_Bool_Exp>;
  _or?: InputMaybe<Array<Profile_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  airtableId?: InputMaybe<String_Comparison_Exp>;
  alias?: InputMaybe<String_Comparison_Exp>;
  angel?: InputMaybe<Boolean_Comparison_Exp>;
  answer1?: InputMaybe<String_Comparison_Exp>;
  answer2?: InputMaybe<String_Comparison_Exp>;
  answer3?: InputMaybe<String_Comparison_Exp>;
  bodyType?: InputMaybe<String_Comparison_Exp>;
  ccHash?: InputMaybe<String_Comparison_Exp>;
  ccLastFour?: InputMaybe<String_Comparison_Exp>;
  ccType?: InputMaybe<String_Comparison_Exp>;
  children?: InputMaybe<String_Comparison_Exp>;
  conversations?: InputMaybe<Conversation_Bool_Exp>;
  conversationsByProfile2id?: InputMaybe<Conversation_Bool_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  dob?: InputMaybe<Date_Comparison_Exp>;
  editorsNote?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  ethnicity?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  industry?: InputMaybe<String_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  lat?: InputMaybe<Float8_Comparison_Exp>;
  lng?: InputMaybe<Float8_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  matches?: InputMaybe<Match_Bool_Exp>;
  matchesByRequesterid?: InputMaybe<Match_Bool_Exp>;
  messages?: InputMaybe<Message_Bool_Exp>;
  notifications_frequency?: InputMaybe<NotificationsFrequency_Comparison_Exp>;
  notifications_type?: InputMaybe<NotificationsType_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  photos?: InputMaybe<Photo_Bool_Exp>;
  prompt?: InputMaybe<Prompt_Bool_Exp>;
  prompt1Id?: InputMaybe<Int_Comparison_Exp>;
  prompt2Id?: InputMaybe<Int_Comparison_Exp>;
  prompt3Id?: InputMaybe<Int_Comparison_Exp>;
  promptByPrompt2id?: InputMaybe<Prompt_Bool_Exp>;
  promptByPrompt3id?: InputMaybe<Prompt_Bool_Exp>;
  relnStatus?: InputMaybe<String_Comparison_Exp>;
  sexuality?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Auth_Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "profile" */
export enum Profile_Constraint {
  /** unique or primary key constraint */
  ProfileAirtableIdKey = 'profile_airtableId_key',
  /** unique or primary key constraint */
  ProfileEmailKey = 'profile_email_key',
  /** unique or primary key constraint */
  ProfilePhoneKey = 'profile_phone_key',
  /** unique or primary key constraint */
  ProfilePkey = 'profile_pkey',
  /** unique or primary key constraint */
  ProfileUserIdKey = 'profile_userId_key'
}

/** input type for incrementing numeric columns in table "profile" */
export type Profile_Inc_Input = {
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  prompt1Id?: InputMaybe<Scalars['Int']>;
  prompt2Id?: InputMaybe<Scalars['Int']>;
  prompt3Id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "profile" */
export type Profile_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  airtableId?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  angel?: InputMaybe<Scalars['Boolean']>;
  answer1?: InputMaybe<Scalars['String']>;
  answer2?: InputMaybe<Scalars['String']>;
  answer3?: InputMaybe<Scalars['String']>;
  bodyType?: InputMaybe<Scalars['String']>;
  ccHash?: InputMaybe<Scalars['String']>;
  ccLastFour?: InputMaybe<Scalars['String']>;
  ccType?: InputMaybe<Scalars['String']>;
  children?: InputMaybe<Scalars['String']>;
  conversations?: InputMaybe<Conversation_Arr_Rel_Insert_Input>;
  conversationsByProfile2id?: InputMaybe<Conversation_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  dob?: InputMaybe<Scalars['date']>;
  editorsNote?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  industry?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  location?: InputMaybe<Scalars['String']>;
  matches?: InputMaybe<Match_Arr_Rel_Insert_Input>;
  matchesByRequesterid?: InputMaybe<Match_Arr_Rel_Insert_Input>;
  messages?: InputMaybe<Message_Arr_Rel_Insert_Input>;
  notifications_frequency?: InputMaybe<Scalars['NotificationsFrequency']>;
  notifications_type?: InputMaybe<Scalars['NotificationsType']>;
  phone?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Photo_Arr_Rel_Insert_Input>;
  prompt?: InputMaybe<Prompt_Obj_Rel_Insert_Input>;
  prompt1Id?: InputMaybe<Scalars['Int']>;
  prompt2Id?: InputMaybe<Scalars['Int']>;
  prompt3Id?: InputMaybe<Scalars['Int']>;
  promptByPrompt2id?: InputMaybe<Prompt_Obj_Rel_Insert_Input>;
  promptByPrompt3id?: InputMaybe<Prompt_Obj_Rel_Insert_Input>;
  relnStatus?: InputMaybe<Scalars['String']>;
  sexuality?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  user?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Profile_Max_Fields = {
  __typename?: 'profile_max_fields';
  airtableId?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  answer1?: Maybe<Scalars['String']>;
  answer2?: Maybe<Scalars['String']>;
  answer3?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  ccHash?: Maybe<Scalars['String']>;
  ccLastFour?: Maybe<Scalars['String']>;
  ccType?: Maybe<Scalars['String']>;
  children?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  dob?: Maybe<Scalars['date']>;
  editorsNote?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  industry?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  location?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  prompt1Id?: Maybe<Scalars['Int']>;
  prompt2Id?: Maybe<Scalars['Int']>;
  prompt3Id?: Maybe<Scalars['Int']>;
  relnStatus?: Maybe<Scalars['String']>;
  sexuality?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "profile" */
export type Profile_Max_Order_By = {
  airtableId?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  answer1?: InputMaybe<Order_By>;
  answer2?: InputMaybe<Order_By>;
  answer3?: InputMaybe<Order_By>;
  bodyType?: InputMaybe<Order_By>;
  ccHash?: InputMaybe<Order_By>;
  ccLastFour?: InputMaybe<Order_By>;
  ccType?: InputMaybe<Order_By>;
  children?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  editorsNote?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  ethnicity?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
  relnStatus?: InputMaybe<Order_By>;
  sexuality?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Profile_Min_Fields = {
  __typename?: 'profile_min_fields';
  airtableId?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  answer1?: Maybe<Scalars['String']>;
  answer2?: Maybe<Scalars['String']>;
  answer3?: Maybe<Scalars['String']>;
  bodyType?: Maybe<Scalars['String']>;
  ccHash?: Maybe<Scalars['String']>;
  ccLastFour?: Maybe<Scalars['String']>;
  ccType?: Maybe<Scalars['String']>;
  children?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  dob?: Maybe<Scalars['date']>;
  editorsNote?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  industry?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  location?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  prompt1Id?: Maybe<Scalars['Int']>;
  prompt2Id?: Maybe<Scalars['Int']>;
  prompt3Id?: Maybe<Scalars['Int']>;
  relnStatus?: Maybe<Scalars['String']>;
  sexuality?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "profile" */
export type Profile_Min_Order_By = {
  airtableId?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  answer1?: InputMaybe<Order_By>;
  answer2?: InputMaybe<Order_By>;
  answer3?: InputMaybe<Order_By>;
  bodyType?: InputMaybe<Order_By>;
  ccHash?: InputMaybe<Order_By>;
  ccLastFour?: InputMaybe<Order_By>;
  ccType?: InputMaybe<Order_By>;
  children?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  editorsNote?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  ethnicity?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
  relnStatus?: InputMaybe<Order_By>;
  sexuality?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "profile" */
export type Profile_Mutation_Response = {
  __typename?: 'profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profile>;
};

/** input type for inserting object relation for remote table "profile" */
export type Profile_Obj_Rel_Insert_Input = {
  data: Profile_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Profile_On_Conflict>;
};

/** on conflict condition type for table "profile" */
export type Profile_On_Conflict = {
  constraint: Profile_Constraint;
  update_columns?: Array<Profile_Update_Column>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "profile". */
export type Profile_Order_By = {
  active?: InputMaybe<Order_By>;
  airtableId?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  angel?: InputMaybe<Order_By>;
  answer1?: InputMaybe<Order_By>;
  answer2?: InputMaybe<Order_By>;
  answer3?: InputMaybe<Order_By>;
  bodyType?: InputMaybe<Order_By>;
  ccHash?: InputMaybe<Order_By>;
  ccLastFour?: InputMaybe<Order_By>;
  ccType?: InputMaybe<Order_By>;
  children?: InputMaybe<Order_By>;
  conversationsByProfile2id_aggregate?: InputMaybe<Conversation_Aggregate_Order_By>;
  conversations_aggregate?: InputMaybe<Conversation_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  dob?: InputMaybe<Order_By>;
  editorsNote?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  ethnicity?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  industry?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  matchesByRequesterid_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  messages_aggregate?: InputMaybe<Message_Aggregate_Order_By>;
  notifications_frequency?: InputMaybe<Order_By>;
  notifications_type?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  photos_aggregate?: InputMaybe<Photo_Aggregate_Order_By>;
  prompt?: InputMaybe<Prompt_Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
  promptByPrompt2id?: InputMaybe<Prompt_Order_By>;
  promptByPrompt3id?: InputMaybe<Prompt_Order_By>;
  relnStatus?: InputMaybe<Order_By>;
  sexuality?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profile */
export type Profile_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "profile" */
export enum Profile_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AirtableId = 'airtableId',
  /** column name */
  Alias = 'alias',
  /** column name */
  Angel = 'angel',
  /** column name */
  Answer1 = 'answer1',
  /** column name */
  Answer2 = 'answer2',
  /** column name */
  Answer3 = 'answer3',
  /** column name */
  BodyType = 'bodyType',
  /** column name */
  CcHash = 'ccHash',
  /** column name */
  CcLastFour = 'ccLastFour',
  /** column name */
  CcType = 'ccType',
  /** column name */
  Children = 'children',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Dob = 'dob',
  /** column name */
  EditorsNote = 'editorsNote',
  /** column name */
  Email = 'email',
  /** column name */
  Ethnicity = 'ethnicity',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Gender = 'gender',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Industry = 'industry',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Location = 'location',
  /** column name */
  NotificationsFrequency = 'notifications_frequency',
  /** column name */
  NotificationsType = 'notifications_type',
  /** column name */
  Phone = 'phone',
  /** column name */
  Prompt1Id = 'prompt1Id',
  /** column name */
  Prompt2Id = 'prompt2Id',
  /** column name */
  Prompt3Id = 'prompt3Id',
  /** column name */
  RelnStatus = 'relnStatus',
  /** column name */
  Sexuality = 'sexuality',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "profile" */
export type Profile_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  airtableId?: InputMaybe<Scalars['String']>;
  alias?: InputMaybe<Scalars['String']>;
  angel?: InputMaybe<Scalars['Boolean']>;
  answer1?: InputMaybe<Scalars['String']>;
  answer2?: InputMaybe<Scalars['String']>;
  answer3?: InputMaybe<Scalars['String']>;
  bodyType?: InputMaybe<Scalars['String']>;
  ccHash?: InputMaybe<Scalars['String']>;
  ccLastFour?: InputMaybe<Scalars['String']>;
  ccType?: InputMaybe<Scalars['String']>;
  children?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  dob?: InputMaybe<Scalars['date']>;
  editorsNote?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  industry?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['float8']>;
  lng?: InputMaybe<Scalars['float8']>;
  location?: InputMaybe<Scalars['String']>;
  notifications_frequency?: InputMaybe<Scalars['NotificationsFrequency']>;
  notifications_type?: InputMaybe<Scalars['NotificationsType']>;
  phone?: InputMaybe<Scalars['String']>;
  prompt1Id?: InputMaybe<Scalars['Int']>;
  prompt2Id?: InputMaybe<Scalars['Int']>;
  prompt3Id?: InputMaybe<Scalars['Int']>;
  relnStatus?: InputMaybe<Scalars['String']>;
  sexuality?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['uuid']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Profile_Stddev_Fields = {
  __typename?: 'profile_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "profile" */
export type Profile_Stddev_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Profile_Stddev_Pop_Fields = {
  __typename?: 'profile_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "profile" */
export type Profile_Stddev_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Profile_Stddev_Samp_Fields = {
  __typename?: 'profile_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "profile" */
export type Profile_Stddev_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Profile_Sum_Fields = {
  __typename?: 'profile_sum_fields';
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lat?: Maybe<Scalars['float8']>;
  lng?: Maybe<Scalars['float8']>;
  prompt1Id?: Maybe<Scalars['Int']>;
  prompt2Id?: Maybe<Scalars['Int']>;
  prompt3Id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "profile" */
export type Profile_Sum_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** update columns of table "profile" */
export enum Profile_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AirtableId = 'airtableId',
  /** column name */
  Alias = 'alias',
  /** column name */
  Angel = 'angel',
  /** column name */
  Answer1 = 'answer1',
  /** column name */
  Answer2 = 'answer2',
  /** column name */
  Answer3 = 'answer3',
  /** column name */
  BodyType = 'bodyType',
  /** column name */
  CcHash = 'ccHash',
  /** column name */
  CcLastFour = 'ccLastFour',
  /** column name */
  CcType = 'ccType',
  /** column name */
  Children = 'children',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Dob = 'dob',
  /** column name */
  EditorsNote = 'editorsNote',
  /** column name */
  Email = 'email',
  /** column name */
  Ethnicity = 'ethnicity',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Gender = 'gender',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Industry = 'industry',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Lat = 'lat',
  /** column name */
  Lng = 'lng',
  /** column name */
  Location = 'location',
  /** column name */
  NotificationsFrequency = 'notifications_frequency',
  /** column name */
  NotificationsType = 'notifications_type',
  /** column name */
  Phone = 'phone',
  /** column name */
  Prompt1Id = 'prompt1Id',
  /** column name */
  Prompt2Id = 'prompt2Id',
  /** column name */
  Prompt3Id = 'prompt3Id',
  /** column name */
  RelnStatus = 'relnStatus',
  /** column name */
  Sexuality = 'sexuality',
  /** column name */
  Timezone = 'timezone',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Verified = 'verified'
}

/** aggregate var_pop on columns */
export type Profile_Var_Pop_Fields = {
  __typename?: 'profile_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "profile" */
export type Profile_Var_Pop_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Profile_Var_Samp_Fields = {
  __typename?: 'profile_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "profile" */
export type Profile_Var_Samp_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Profile_Variance_Fields = {
  __typename?: 'profile_variance_fields';
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  prompt1Id?: Maybe<Scalars['Float']>;
  prompt2Id?: Maybe<Scalars['Float']>;
  prompt3Id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "profile" */
export type Profile_Variance_Order_By = {
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  prompt1Id?: InputMaybe<Order_By>;
  prompt2Id?: InputMaybe<Order_By>;
  prompt3Id?: InputMaybe<Order_By>;
};

/** columns and relationships of "prompt" */
export type Prompt = {
  __typename?: 'prompt';
  category: Scalars['Int'];
  createdAt: Scalars['timestamp'];
  forAngelInvestors: Scalars['Boolean'];
  forAngels: Scalars['Boolean'];
  id: Scalars['Int'];
  /** An array relationship */
  profiles: Array<Profile>;
  /** An array relationship */
  profilesByPrompt2id: Array<Profile>;
  /** An aggregate relationship */
  profilesByPrompt2id_aggregate: Profile_Aggregate;
  /** An array relationship */
  profilesByPrompt3id: Array<Profile>;
  /** An aggregate relationship */
  profilesByPrompt3id_aggregate: Profile_Aggregate;
  /** An aggregate relationship */
  profiles_aggregate: Profile_Aggregate;
  prompt: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "prompt" */
export type PromptProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "prompt" */
export type PromptProfilesByPrompt2idArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "prompt" */
export type PromptProfilesByPrompt2id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "prompt" */
export type PromptProfilesByPrompt3idArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "prompt" */
export type PromptProfilesByPrompt3id_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


/** columns and relationships of "prompt" */
export type PromptProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};

/** aggregated selection of "prompt" */
export type Prompt_Aggregate = {
  __typename?: 'prompt_aggregate';
  aggregate?: Maybe<Prompt_Aggregate_Fields>;
  nodes: Array<Prompt>;
};

/** aggregate fields of "prompt" */
export type Prompt_Aggregate_Fields = {
  __typename?: 'prompt_aggregate_fields';
  avg?: Maybe<Prompt_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Prompt_Max_Fields>;
  min?: Maybe<Prompt_Min_Fields>;
  stddev?: Maybe<Prompt_Stddev_Fields>;
  stddev_pop?: Maybe<Prompt_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prompt_Stddev_Samp_Fields>;
  sum?: Maybe<Prompt_Sum_Fields>;
  var_pop?: Maybe<Prompt_Var_Pop_Fields>;
  var_samp?: Maybe<Prompt_Var_Samp_Fields>;
  variance?: Maybe<Prompt_Variance_Fields>;
};


/** aggregate fields of "prompt" */
export type Prompt_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prompt_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Prompt_Avg_Fields = {
  __typename?: 'prompt_avg_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "prompt". All fields are combined with a logical 'AND'. */
export type Prompt_Bool_Exp = {
  _and?: InputMaybe<Array<Prompt_Bool_Exp>>;
  _not?: InputMaybe<Prompt_Bool_Exp>;
  _or?: InputMaybe<Array<Prompt_Bool_Exp>>;
  category?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  forAngelInvestors?: InputMaybe<Boolean_Comparison_Exp>;
  forAngels?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  profiles?: InputMaybe<Profile_Bool_Exp>;
  profilesByPrompt2id?: InputMaybe<Profile_Bool_Exp>;
  profilesByPrompt3id?: InputMaybe<Profile_Bool_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "prompt" */
export enum Prompt_Constraint {
  /** unique or primary key constraint */
  PromptCategoryPromptKey = 'prompt_category_prompt_key',
  /** unique or primary key constraint */
  PromptPkey = 'prompt_pkey'
}

/** input type for incrementing numeric columns in table "prompt" */
export type Prompt_Inc_Input = {
  category?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "prompt" */
export type Prompt_Insert_Input = {
  category?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  forAngelInvestors?: InputMaybe<Scalars['Boolean']>;
  forAngels?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  profiles?: InputMaybe<Profile_Arr_Rel_Insert_Input>;
  profilesByPrompt2id?: InputMaybe<Profile_Arr_Rel_Insert_Input>;
  profilesByPrompt3id?: InputMaybe<Profile_Arr_Rel_Insert_Input>;
  prompt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Prompt_Max_Fields = {
  __typename?: 'prompt_max_fields';
  category?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  prompt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Prompt_Min_Fields = {
  __typename?: 'prompt_min_fields';
  category?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  prompt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "prompt" */
export type Prompt_Mutation_Response = {
  __typename?: 'prompt_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompt>;
};

/** input type for inserting object relation for remote table "prompt" */
export type Prompt_Obj_Rel_Insert_Input = {
  data: Prompt_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Prompt_On_Conflict>;
};

/** on conflict condition type for table "prompt" */
export type Prompt_On_Conflict = {
  constraint: Prompt_Constraint;
  update_columns?: Array<Prompt_Update_Column>;
  where?: InputMaybe<Prompt_Bool_Exp>;
};

/** Ordering options when selecting data from "prompt". */
export type Prompt_Order_By = {
  category?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  forAngelInvestors?: InputMaybe<Order_By>;
  forAngels?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  profilesByPrompt2id_aggregate?: InputMaybe<Profile_Aggregate_Order_By>;
  profilesByPrompt3id_aggregate?: InputMaybe<Profile_Aggregate_Order_By>;
  profiles_aggregate?: InputMaybe<Profile_Aggregate_Order_By>;
  prompt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prompt */
export type Prompt_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "prompt" */
export enum Prompt_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ForAngelInvestors = 'forAngelInvestors',
  /** column name */
  ForAngels = 'forAngels',
  /** column name */
  Id = 'id',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "prompt" */
export type Prompt_Set_Input = {
  category?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  forAngelInvestors?: InputMaybe<Scalars['Boolean']>;
  forAngels?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  prompt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Prompt_Stddev_Fields = {
  __typename?: 'prompt_stddev_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Prompt_Stddev_Pop_Fields = {
  __typename?: 'prompt_stddev_pop_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Prompt_Stddev_Samp_Fields = {
  __typename?: 'prompt_stddev_samp_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Prompt_Sum_Fields = {
  __typename?: 'prompt_sum_fields';
  category?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "prompt" */
export enum Prompt_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ForAngelInvestors = 'forAngelInvestors',
  /** column name */
  ForAngels = 'forAngels',
  /** column name */
  Id = 'id',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Prompt_Var_Pop_Fields = {
  __typename?: 'prompt_var_pop_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Prompt_Var_Samp_Fields = {
  __typename?: 'prompt_var_samp_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Prompt_Variance_Fields = {
  __typename?: 'prompt_variance_fields';
  category?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "conversation" */
  conversation: Array<Conversation>;
  /** fetch aggregated fields from the table: "conversation" */
  conversation_aggregate: Conversation_Aggregate;
  /** fetch data from the table: "conversation" using primary key columns */
  conversation_by_pk?: Maybe<Conversation>;
  /** fetch data from the table: "match" */
  match: Array<Match>;
  /** fetch aggregated fields from the table: "match" */
  match_aggregate: Match_Aggregate;
  /** fetch data from the table: "match" using primary key columns */
  match_by_pk?: Maybe<Match>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "photo" */
  photo: Array<Photo>;
  /** fetch aggregated fields from the table: "photo" */
  photo_aggregate: Photo_Aggregate;
  /** fetch data from the table: "photo" using primary key columns */
  photo_by_pk?: Maybe<Photo>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "prompt" */
  prompt: Array<Prompt>;
  /** fetch aggregated fields from the table: "prompt" */
  prompt_aggregate: Prompt_Aggregate;
  /** fetch data from the table: "prompt" using primary key columns */
  prompt_by_pk?: Maybe<Prompt>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootConversationArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Query_RootConversation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Query_RootConversation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMatchArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Query_RootMatch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Query_RootMatch_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPhotoArgs = {
  distinct_on?: InputMaybe<Array<Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Order_By>>;
  where?: InputMaybe<Photo_Bool_Exp>;
};


export type Query_RootPhoto_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Order_By>>;
  where?: InputMaybe<Photo_Bool_Exp>;
};


export type Query_RootPhoto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Query_RootProfile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootPromptArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompt_Order_By>>;
  where?: InputMaybe<Prompt_Bool_Exp>;
};


export type Query_RootPrompt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompt_Order_By>>;
  where?: InputMaybe<Prompt_Bool_Exp>;
};


export type Query_RootPrompt_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.users" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  auth_users_by_pk?: Maybe<Auth_Users>;
  /** fetch data from the table: "conversation" */
  conversation: Array<Conversation>;
  /** fetch aggregated fields from the table: "conversation" */
  conversation_aggregate: Conversation_Aggregate;
  /** fetch data from the table: "conversation" using primary key columns */
  conversation_by_pk?: Maybe<Conversation>;
  /** fetch data from the table: "match" */
  match: Array<Match>;
  /** fetch aggregated fields from the table: "match" */
  match_aggregate: Match_Aggregate;
  /** fetch data from the table: "match" using primary key columns */
  match_by_pk?: Maybe<Match>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk?: Maybe<Message>;
  /** fetch data from the table: "photo" */
  photo: Array<Photo>;
  /** fetch aggregated fields from the table: "photo" */
  photo_aggregate: Photo_Aggregate;
  /** fetch data from the table: "photo" using primary key columns */
  photo_by_pk?: Maybe<Photo>;
  /** fetch data from the table: "profile" */
  profile: Array<Profile>;
  /** fetch aggregated fields from the table: "profile" */
  profile_aggregate: Profile_Aggregate;
  /** fetch data from the table: "profile" using primary key columns */
  profile_by_pk?: Maybe<Profile>;
  /** fetch data from the table: "prompt" */
  prompt: Array<Prompt>;
  /** fetch aggregated fields from the table: "prompt" */
  prompt_aggregate: Prompt_Aggregate;
  /** fetch data from the table: "prompt" using primary key columns */
  prompt_by_pk?: Maybe<Prompt>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootConversationArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Subscription_RootConversation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Conversation_Order_By>>;
  where?: InputMaybe<Conversation_Bool_Exp>;
};


export type Subscription_RootConversation_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMatchArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Subscription_RootMatch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Subscription_RootMatch_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPhotoArgs = {
  distinct_on?: InputMaybe<Array<Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Order_By>>;
  where?: InputMaybe<Photo_Bool_Exp>;
};


export type Subscription_RootPhoto_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Photo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Photo_Order_By>>;
  where?: InputMaybe<Photo_Bool_Exp>;
};


export type Subscription_RootPhoto_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProfileArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profile_Order_By>>;
  where?: InputMaybe<Profile_Bool_Exp>;
};


export type Subscription_RootProfile_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootPromptArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompt_Order_By>>;
  where?: InputMaybe<Prompt_Bool_Exp>;
};


export type Subscription_RootPrompt_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Prompt_Order_By>>;
  where?: InputMaybe<Prompt_Bool_Exp>;
};


export type Subscription_RootPrompt_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type MeQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type MeQuery = { __typename?: 'query_root', profile: Array<{ __typename?: 'profile', alias: string }> };


export const MeDocument = `
    query me($userId: uuid!) {
  profile(where: {userId: {_eq: $userId}}) {
    alias
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      variables: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>
    ) =>
    useQuery<MeQuery, TError, TData>(
      ['me', variables],
      fetcher<MeQuery, MeQueryVariables>(MeDocument, variables),
      options
    );