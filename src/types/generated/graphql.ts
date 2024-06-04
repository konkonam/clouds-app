/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A input value to add multiple pauses */
export type AddPause = {
  pause_finished_at?: InputMaybe<Scalars['String']['input']>;
  pause_started_at?: InputMaybe<Scalars['String']['input']>;
};

/** Paginated collection of TimeEntry and TimeOff type */
export type CombinedTimesPagination = {
  __typename?: 'CombinedTimesPagination';
  /** The current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** The paginated items */
  data?: Maybe<Array<Maybe<CombinedTimesUnion>>>;
  /** The last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  /** The total results */
  total?: Maybe<Scalars['Int']['output']>;
};

/** Union of TimeEntry and TimeOff type */
export type CombinedTimesUnion = TimeEntry | TimeOff;

/** A accessToken and its expiration date */
export type CurrentBalance = {
  __typename?: 'CurrentBalance';
  /** The current work time balance */
  balance?: Maybe<Scalars['Int']['output']>;
  /** The current month in number format */
  currentMonth?: Maybe<Scalars['String']['output']>;
  /** The current months worked hours */
  monthlyActualTime?: Maybe<Scalars['Int']['output']>;
  /** The current months work schedule */
  monthlyTargetTime?: Maybe<Scalars['Int']['output']>;
};

/** A accessToken and its expiration date */
export type DetailedBalance = {
  __typename?: 'DetailedBalance';
  /** The actual time of a time range */
  actualTime?: Maybe<Scalars['Int']['output']>;
  /** The balance of a time range */
  balance?: Maybe<Scalars['Int']['output']>;
  /** The not forfeiting overtime of a time range */
  notForfeitingSeconds?: Maybe<Scalars['Int']['output']>;
  /** The target time of a time range */
  targetTime?: Maybe<Scalars['Int']['output']>;
};

/** The detailed work time of a timeEntry */
export type DetailedWorkTime = {
  __typename?: 'DetailedWorkTime';
  /** The duration of the considered working period */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The end of the considered working period as DateTimeString */
  endTime?: Maybe<Scalars['String']['output']>;
  /** The start of the considered working period as DateTimeString */
  startTime?: Maybe<Scalars['String']['output']>;
};

/** A accessToken and its expiration date */
export type Login = {
  __typename?: 'Login';
  /** The authorization token */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** The date the token expires */
  expiresAt?: Maybe<Scalars['String']['output']>;
  /** The User logged in */
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdmin?: Maybe<User>;
  approveTimeEntries?: Maybe<Scalars['Int']['output']>;
  approveTimeEntryRequests?: Maybe<Scalars['Boolean']['output']>;
  changeAutomaticApproval?: Maybe<User>;
  changeNote?: Maybe<Note>;
  /**
   * This mutation is used to execute a pin change for the currently authorized user.
   *         The user must send the new pin.
   */
  changePin?: Maybe<MutationResult>;
  createNoteForTimeEntries?: Maybe<Note>;
  createTimeEntry?: Maybe<Scalars['Int']['output']>;
  createTimeEntryRequest?: Maybe<Scalars['Int']['output']>;
  declineTimeEntryRequests?: Maybe<Scalars['Boolean']['output']>;
  deleteNotes?: Maybe<Scalars['Boolean']['output']>;
  deleteTimeEntries?: Maybe<Scalars['Int']['output']>;
  editTimeEntries?: Maybe<Scalars['Int']['output']>;
  generatePDFReport?: Maybe<Scalars['String']['output']>;
  importBambooTimeOffs?: Maybe<Scalars['Boolean']['output']>;
  login?: Maybe<Login>;
  loginViaPin?: Maybe<Login>;
  /**
   * This mutation is used to execute a password change for a given user.
   *         The user must send a previously generated token and his email address.
   */
  passwordReset?: Maybe<MutationResult>;
  /**
   * This mutation is used to request a new password for a given user.
   *         A e-mail with a link will be send to the user.
   */
  passwordResetRequest?: Maybe<MutationResult>;
  removeAdmin?: Maybe<User>;
  sendIndividualPDFReport?: Maybe<Scalars['String']['output']>;
  startPause?: Maybe<TimeEntry>;
  startTimer?: Maybe<TimeEntry>;
  stopPause?: Maybe<TimeEntry>;
  stopTimer?: Maybe<TimeEntry>;
  withdrawTimeEntry?: Maybe<TimeEntry>;
};


export type MutationAddAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApproveTimeEntriesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationApproveTimeEntryRequestsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationChangeAutomaticApprovalArgs = {
  automaticApproval: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationChangeNoteArgs = {
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationChangePinArgs = {
  pin: Scalars['String']['input'];
};


export type MutationCreateNoteForTimeEntriesArgs = {
  text?: InputMaybe<Scalars['String']['input']>;
  timeEntryIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCreateTimeEntryArgs = {
  finished_at?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  pauses?: InputMaybe<Array<InputMaybe<AddPause>>>;
  started_at?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateTimeEntryRequestArgs = {
  finished_at?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  pauses?: InputMaybe<Array<InputMaybe<AddPause>>>;
  started_at?: InputMaybe<Scalars['String']['input']>;
  time_entry_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeclineTimeEntryRequestsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  note: Scalars['String']['input'];
};


export type MutationDeleteNotesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteTimeEntriesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationEditTimeEntriesArgs = {
  finished_at?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  pauses?: InputMaybe<Array<InputMaybe<AddPause>>>;
  started_at?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginViaPinArgs = {
  id: Scalars['Int']['input'];
  pin: Scalars['String']['input'];
};


export type MutationPasswordResetArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationPasswordResetRequestArgs = {
  clientResetUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationRemoveAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendIndividualPdfReportArgs = {
  employeeId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWithdrawTimeEntryArgs = {
  id: Scalars['ID']['input'];
};

/** A generic result type to indicate the status of the mutation */
export type MutationResult = {
  __typename?: 'MutationResult';
  /** The status of the mutation */
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** A Note of a TimeEntry */
export type Note = {
  __typename?: 'Note';
  /** The author of the Note */
  author?: Maybe<User>;
  /** Creation Date */
  created_at?: Maybe<Scalars['String']['output']>;
  /** The id of the Note */
  id: Scalars['ID']['output'];
  /** The last editor of the Note */
  lastEditedBy?: Maybe<User>;
  /** The text of the Note */
  text?: Maybe<Scalars['String']['output']>;
  /** The TimeEntry of the Note */
  timeEntry?: Maybe<TimeEntry>;
  /** Date of last update */
  updated_at?: Maybe<Scalars['String']['output']>;
};

/** A pause */
export type Pause = {
  __typename?: 'Pause';
  /** The time between start and end of the pause in seconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The end of a pause. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** True if the pause was forced by the system. */
  forced?: Maybe<Scalars['Boolean']['output']>;
  /** The start of a pause. */
  started_at?: Maybe<Scalars['String']['output']>;
};

/** A PauseRequest */
export type PauseRequest = {
  __typename?: 'PauseRequest';
  /** The end of a PauseRequest. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** The id of the PauseRequest */
  id: Scalars['ID']['output'];
  /** The start of a PauseRequest. */
  started_at?: Maybe<Scalars['String']['output']>;
};

/** A Permission */
export type Permission = {
  __typename?: 'Permission';
  /** Description of the permission. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the permission. */
  name?: Maybe<Scalars['String']['output']>;
  /** The slug of the permission. */
  slug?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** Fetch the timeOffs and timeEntries as a combined, paginated query. */
  combinedTimes?: Maybe<CombinedTimesPagination>;
  /** Fetch the worktime balance of the current month for a User. */
  currentBalanceForUser?: Maybe<CurrentBalance>;
  /** Fetch the targetTime, the actualTime and the according balance for an arbitrary user as admin.  */
  detailedBalanceForUser?: Maybe<DetailedBalance>;
  notes?: Maybe<Array<Maybe<Note>>>;
  timeEntries?: Maybe<TimeEntryPagination>;
  timeEntry?: Maybe<TimeEntry>;
  timeEntryRequests?: Maybe<TimeEntryRequestPagination>;
  timeOff?: Maybe<TimeOff>;
  timeOffs?: Maybe<Array<Maybe<TimeOff>>>;
  user?: Maybe<User>;
};


export type QueryCombinedTimesArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderDateAscending?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDetailedBalanceForUserArgs = {
  fromDate?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotesArgs = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeEntriesArgs = {
  approved_for_export?: InputMaybe<Scalars['Boolean']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDuration?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeEntryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeEntryRequestsArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTimeOffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeOffsArgs = {
  date?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** A TimeEntry */
export type TimeEntry = {
  __typename?: 'TimeEntry';
  /** The calculated detailed work time */
  detailed_work_time?: Maybe<Array<Maybe<DetailedWorkTime>>>;
  /** Whether the TimeEntry has been edited afterwards. */
  external_edit?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the TimeEntry has been stopped externally. */
  external_stop?: Maybe<Scalars['Boolean']['output']>;
  /** The end of a TimeEntry. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** The id of the TimeEntry */
  id: Scalars['ID']['output'];
  /** Whether the user of the TimeEntry is currently pausing */
  is_pausing?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the TimeEntry is running without any running pause */
  is_working?: Maybe<Scalars['Boolean']['output']>;
  /** The users latest pause. */
  latest_pause?: Maybe<Pause>;
  /** The Notes of this TimeEntry */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** The sum of the duration of all pauses of this TimeEntry. */
  pause_duration?: Maybe<Scalars['Int']['output']>;
  /** All pauses for this time entry. */
  pauses?: Maybe<Array<Maybe<Pause>>>;
  /** The start of a TimeEntry. */
  started_at?: Maybe<Scalars['String']['output']>;
  /** Whether the TimeEntry is a timeOff or not. */
  time_off?: Maybe<Scalars['Boolean']['output']>;
  /** The type of the timeOff if given */
  time_off_type?: Maybe<Scalars['String']['output']>;
  /** The user of a TimeEntry */
  user?: Maybe<User>;
  /** The time between start and end of the TimeEntry minus the duration of all pauses */
  worked_seconds?: Maybe<Scalars['Int']['output']>;
};

export type TimeEntryPagination = {
  __typename?: 'TimeEntryPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<TimeEntry>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** A TimeEntryRequest */
export type TimeEntryRequest = {
  __typename?: 'TimeEntryRequest';
  /** The calculated detailed work time */
  detailed_work_time?: Maybe<Array<Maybe<DetailedWorkTime>>>;
  /** The end of a TimeEntryRequest. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** The id of the TimeEntryRequest */
  id: Scalars['ID']['output'];
  /** The Note of this TimeEntryRequest */
  note?: Maybe<Scalars['String']['output']>;
  /** All PauseRequests for this TimeEntryRequest. */
  pauseRequests?: Maybe<Array<Maybe<PauseRequest>>>;
  /** The start of a TimeEntryRequest. */
  started_at?: Maybe<Scalars['String']['output']>;
  /** The timeEntryId of the TimeEntryRequest */
  time_entry_id?: Maybe<Scalars['Int']['output']>;
  /** The user of a TimeEntryRequest */
  user?: Maybe<User>;
};

export type TimeEntryRequestPagination = {
  __typename?: 'TimeEntryRequestPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<TimeEntryRequest>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** A TimeOff */
export type TimeOff = {
  __typename?: 'TimeOff';
  /** The date of the TimeOff entry as unix time stamp. */
  date?: Maybe<Scalars['Int']['output']>;
  /** The duration of the TimeOff entry. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The id of the TimeOff */
  id: Scalars['ID']['output'];
  /** The type of the TimeOff entry. */
  type?: Maybe<Scalars['String']['output']>;
  /** The user of a TimeEntry */
  user?: Maybe<User>;
};

/** A user */
export type User = {
  __typename?: 'User';
  /** The boolean whether timeEntries of this User should be approved automatically */
  automatic_approval_of_timeEntries?: Maybe<Scalars['Boolean']['output']>;
  /** The URL to the avatar of the user */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The bambooId of the User */
  bambooId?: Maybe<Scalars['String']['output']>;
  /** The email of user */
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  /** The id of the user */
  id: Scalars['ID']['output'];
  /** Returns true when the User has admin rights. */
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  /** The users latest time entry. */
  latest_time_entry?: Maybe<TimeEntry>;
  /** The prefixed id of the user in order to login automatically via pin login */
  loginId?: Maybe<Scalars['String']['output']>;
  /** The name of the User */
  name?: Maybe<Scalars['String']['output']>;
  /** The Notes of the user */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** The users permissions. */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** The photo of the user */
  photo?: Maybe<Scalars['String']['output']>;
  /** The pin of the user */
  pin?: Maybe<Scalars['String']['output']>;
  /** The time entries of the user */
  timeEntries?: Maybe<Array<Maybe<TimeEntry>>>;
};

export type TimeEntryFieldsFragment = { __typename?: 'TimeEntry', id: string, started_at?: string | null, finished_at?: string | null, worked_seconds?: number | null, pause_duration?: number | null, time_off?: boolean | null, time_off_type?: string | null, external_edit?: boolean | null, external_stop?: boolean | null, is_working?: boolean | null, detailed_work_time?: Array<{ __typename?: 'DetailedWorkTime', startTime?: string | null, endTime?: string | null, duration?: number | null } | null> | null, user?: { __typename?: 'User', name?: string | null } | null, notes?: Array<{ __typename?: 'Note', text?: string | null, created_at?: string | null, author?: { __typename?: 'User', id: string, name?: string | null } | null } | null> | null, latest_pause?: { __typename?: 'Pause', started_at?: string | null, finished_at?: string | null, duration?: number | null, forced?: boolean | null } | null, pauses?: Array<{ __typename?: 'Pause', started_at?: string | null, finished_at?: string | null, duration?: number | null, forced?: boolean | null } | null> | null } & { ' $fragmentName'?: 'TimeEntryFieldsFragment' };

export type UserFieldsFragment = { __typename?: 'User', id: string, pin?: string | null, photo?: string | null, firstName?: string | null, loginId?: string | null, latest_time_entry?: (
    { __typename?: 'TimeEntry' }
    & { ' $fragmentRefs'?: { 'TimeEntryFieldsFragment': TimeEntryFieldsFragment } }
  ) | null, permissions?: Array<{ __typename?: 'Permission', name?: string | null } | null> | null } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type TimeEntryQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeEntryQuery = { __typename?: 'Query', timeEntry?: { __typename?: 'TimeEntry', id: string, detailed_work_time?: Array<{ __typename?: 'DetailedWorkTime', duration?: number | null, endTime?: string | null } | null> | null } | null };

export type TimeEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeEntriesQuery = { __typename?: 'Query', timeEntries?: { __typename?: 'TimeEntryPagination', total: number, last_page: number } | null };

export type LoginByEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginByEmailMutation = { __typename?: 'Mutation', login?: { __typename?: 'Login', accessToken?: string | null, expiresAt?: string | null, user?: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    ) | null } | null };

export const TimeEntryFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimeEntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimeEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"worked_seconds"}},{"kind":"Field","name":{"kind":"Name","value":"pause_duration"}},{"kind":"Field","name":{"kind":"Name","value":"time_off"}},{"kind":"Field","name":{"kind":"Name","value":"time_off_type"}},{"kind":"Field","name":{"kind":"Name","value":"external_edit"}},{"kind":"Field","name":{"kind":"Name","value":"external_stop"}},{"kind":"Field","name":{"kind":"Name","value":"is_working"}},{"kind":"Field","name":{"kind":"Name","value":"detailed_work_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latest_pause"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"forced"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pauses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"forced"}}]}}]}}]} as unknown as DocumentNode<TimeEntryFieldsFragment, unknown>;
export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}},{"kind":"Field","name":{"kind":"Name","value":"latest_time_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimeEntryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"loginId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimeEntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimeEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"worked_seconds"}},{"kind":"Field","name":{"kind":"Name","value":"pause_duration"}},{"kind":"Field","name":{"kind":"Name","value":"time_off"}},{"kind":"Field","name":{"kind":"Name","value":"time_off_type"}},{"kind":"Field","name":{"kind":"Name","value":"external_edit"}},{"kind":"Field","name":{"kind":"Name","value":"external_stop"}},{"kind":"Field","name":{"kind":"Name","value":"is_working"}},{"kind":"Field","name":{"kind":"Name","value":"detailed_work_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latest_pause"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"forced"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pauses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"forced"}}]}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const TimeEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TimeEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"detailed_work_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<TimeEntryQuery, TimeEntryQueryVariables>;
export const TimeEntriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TimeEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeEntries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"last_page"}}]}}]}}]} as unknown as DocumentNode<TimeEntriesQuery, TimeEntriesQueryVariables>;
export const LoginByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimeEntryFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimeEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"worked_seconds"}},{"kind":"Field","name":{"kind":"Name","value":"pause_duration"}},{"kind":"Field","name":{"kind":"Name","value":"time_off"}},{"kind":"Field","name":{"kind":"Name","value":"time_off_type"}},{"kind":"Field","name":{"kind":"Name","value":"external_edit"}},{"kind":"Field","name":{"kind":"Name","value":"external_stop"}},{"kind":"Field","name":{"kind":"Name","value":"is_working"}},{"kind":"Field","name":{"kind":"Name","value":"detailed_work_time"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"latest_pause"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"forced"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pauses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"forced"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}},{"kind":"Field","name":{"kind":"Name","value":"latest_time_entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimeEntryFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"photo"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"loginId"}}]}}]} as unknown as DocumentNode<LoginByEmailMutation, LoginByEmailMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** A input value to add multiple pauses */
export type AddPause = {
  pause_finished_at?: InputMaybe<Scalars['String']['input']>;
  pause_started_at?: InputMaybe<Scalars['String']['input']>;
};

/** Paginated collection of TimeEntry and TimeOff type */
export type CombinedTimesPagination = {
  __typename?: 'CombinedTimesPagination';
  /** The current page */
  currentPage?: Maybe<Scalars['Int']['output']>;
  /** The paginated items */
  data?: Maybe<Array<Maybe<CombinedTimesUnion>>>;
  /** The last page */
  lastPage?: Maybe<Scalars['Int']['output']>;
  /** The total results */
  total?: Maybe<Scalars['Int']['output']>;
};

/** Union of TimeEntry and TimeOff type */
export type CombinedTimesUnion = TimeEntry | TimeOff;

/** A accessToken and its expiration date */
export type CurrentBalance = {
  __typename?: 'CurrentBalance';
  /** The current work time balance */
  balance?: Maybe<Scalars['Int']['output']>;
  /** The current month in number format */
  currentMonth?: Maybe<Scalars['String']['output']>;
  /** The current months worked hours */
  monthlyActualTime?: Maybe<Scalars['Int']['output']>;
  /** The current months work schedule */
  monthlyTargetTime?: Maybe<Scalars['Int']['output']>;
};

/** A accessToken and its expiration date */
export type DetailedBalance = {
  __typename?: 'DetailedBalance';
  /** The actual time of a time range */
  actualTime?: Maybe<Scalars['Int']['output']>;
  /** The balance of a time range */
  balance?: Maybe<Scalars['Int']['output']>;
  /** The not forfeiting overtime of a time range */
  notForfeitingSeconds?: Maybe<Scalars['Int']['output']>;
  /** The target time of a time range */
  targetTime?: Maybe<Scalars['Int']['output']>;
};

/** The detailed work time of a timeEntry */
export type DetailedWorkTime = {
  __typename?: 'DetailedWorkTime';
  /** The duration of the considered working period */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The end of the considered working period as DateTimeString */
  endTime?: Maybe<Scalars['String']['output']>;
  /** The start of the considered working period as DateTimeString */
  startTime?: Maybe<Scalars['String']['output']>;
};

/** A accessToken and its expiration date */
export type Login = {
  __typename?: 'Login';
  /** The authorization token */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** The date the token expires */
  expiresAt?: Maybe<Scalars['String']['output']>;
  /** The User logged in */
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdmin?: Maybe<User>;
  approveTimeEntries?: Maybe<Scalars['Int']['output']>;
  approveTimeEntryRequests?: Maybe<Scalars['Boolean']['output']>;
  changeAutomaticApproval?: Maybe<User>;
  changeNote?: Maybe<Note>;
  /**
   * This mutation is used to execute a pin change for the currently authorized user.
   *         The user must send the new pin.
   */
  changePin?: Maybe<MutationResult>;
  createNoteForTimeEntries?: Maybe<Note>;
  createTimeEntry?: Maybe<Scalars['Int']['output']>;
  createTimeEntryRequest?: Maybe<Scalars['Int']['output']>;
  declineTimeEntryRequests?: Maybe<Scalars['Boolean']['output']>;
  deleteNotes?: Maybe<Scalars['Boolean']['output']>;
  deleteTimeEntries?: Maybe<Scalars['Int']['output']>;
  editTimeEntries?: Maybe<Scalars['Int']['output']>;
  generatePDFReport?: Maybe<Scalars['String']['output']>;
  importBambooTimeOffs?: Maybe<Scalars['Boolean']['output']>;
  login?: Maybe<Login>;
  loginViaPin?: Maybe<Login>;
  /**
   * This mutation is used to execute a password change for a given user.
   *         The user must send a previously generated token and his email address.
   */
  passwordReset?: Maybe<MutationResult>;
  /**
   * This mutation is used to request a new password for a given user.
   *         A e-mail with a link will be send to the user.
   */
  passwordResetRequest?: Maybe<MutationResult>;
  removeAdmin?: Maybe<User>;
  sendIndividualPDFReport?: Maybe<Scalars['String']['output']>;
  startPause?: Maybe<TimeEntry>;
  startTimer?: Maybe<TimeEntry>;
  stopPause?: Maybe<TimeEntry>;
  stopTimer?: Maybe<TimeEntry>;
  withdrawTimeEntry?: Maybe<TimeEntry>;
};


export type MutationAddAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationApproveTimeEntriesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationApproveTimeEntryRequestsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationChangeAutomaticApprovalArgs = {
  automaticApproval: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationChangeNoteArgs = {
  id: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationChangePinArgs = {
  pin: Scalars['String']['input'];
};


export type MutationCreateNoteForTimeEntriesArgs = {
  text?: InputMaybe<Scalars['String']['input']>;
  timeEntryIds: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCreateTimeEntryArgs = {
  finished_at?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  pauses?: InputMaybe<Array<InputMaybe<AddPause>>>;
  started_at?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateTimeEntryRequestArgs = {
  finished_at?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  pauses?: InputMaybe<Array<InputMaybe<AddPause>>>;
  started_at?: InputMaybe<Scalars['String']['input']>;
  time_entry_id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeclineTimeEntryRequestsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  note: Scalars['String']['input'];
};


export type MutationDeleteNotesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteTimeEntriesArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationEditTimeEntriesArgs = {
  finished_at?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  pauses?: InputMaybe<Array<InputMaybe<AddPause>>>;
  started_at?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginViaPinArgs = {
  id: Scalars['Int']['input'];
  pin: Scalars['String']['input'];
};


export type MutationPasswordResetArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationPasswordResetRequestArgs = {
  clientResetUrl: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationRemoveAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendIndividualPdfReportArgs = {
  employeeId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};


export type MutationWithdrawTimeEntryArgs = {
  id: Scalars['ID']['input'];
};

/** A generic result type to indicate the status of the mutation */
export type MutationResult = {
  __typename?: 'MutationResult';
  /** The status of the mutation */
  success?: Maybe<Scalars['Boolean']['output']>;
};

/** A Note of a TimeEntry */
export type Note = {
  __typename?: 'Note';
  /** The author of the Note */
  author?: Maybe<User>;
  /** Creation Date */
  created_at?: Maybe<Scalars['String']['output']>;
  /** The id of the Note */
  id: Scalars['ID']['output'];
  /** The last editor of the Note */
  lastEditedBy?: Maybe<User>;
  /** The text of the Note */
  text?: Maybe<Scalars['String']['output']>;
  /** The TimeEntry of the Note */
  timeEntry?: Maybe<TimeEntry>;
  /** Date of last update */
  updated_at?: Maybe<Scalars['String']['output']>;
};

/** A pause */
export type Pause = {
  __typename?: 'Pause';
  /** The time between start and end of the pause in seconds */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The end of a pause. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** True if the pause was forced by the system. */
  forced?: Maybe<Scalars['Boolean']['output']>;
  /** The start of a pause. */
  started_at?: Maybe<Scalars['String']['output']>;
};

/** A PauseRequest */
export type PauseRequest = {
  __typename?: 'PauseRequest';
  /** The end of a PauseRequest. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** The id of the PauseRequest */
  id: Scalars['ID']['output'];
  /** The start of a PauseRequest. */
  started_at?: Maybe<Scalars['String']['output']>;
};

/** A Permission */
export type Permission = {
  __typename?: 'Permission';
  /** Description of the permission. */
  description?: Maybe<Scalars['String']['output']>;
  /** Name of the permission. */
  name?: Maybe<Scalars['String']['output']>;
  /** The slug of the permission. */
  slug?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** Fetch the timeOffs and timeEntries as a combined, paginated query. */
  combinedTimes?: Maybe<CombinedTimesPagination>;
  /** Fetch the worktime balance of the current month for a User. */
  currentBalanceForUser?: Maybe<CurrentBalance>;
  /** Fetch the targetTime, the actualTime and the according balance for an arbitrary user as admin.  */
  detailedBalanceForUser?: Maybe<DetailedBalance>;
  notes?: Maybe<Array<Maybe<Note>>>;
  timeEntries?: Maybe<TimeEntryPagination>;
  timeEntry?: Maybe<TimeEntry>;
  timeEntryRequests?: Maybe<TimeEntryRequestPagination>;
  timeOff?: Maybe<TimeOff>;
  timeOffs?: Maybe<Array<Maybe<TimeOff>>>;
  user?: Maybe<User>;
};


export type QueryCombinedTimesArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderDateAscending?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDetailedBalanceForUserArgs = {
  fromDate?: InputMaybe<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotesArgs = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeEntriesArgs = {
  approved_for_export?: InputMaybe<Scalars['Boolean']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortDuration?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeEntryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeEntryRequestsArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTimeOffArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeOffsArgs = {
  date?: InputMaybe<Scalars['Int']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** A TimeEntry */
export type TimeEntry = {
  __typename?: 'TimeEntry';
  /** The calculated detailed work time */
  detailed_work_time?: Maybe<Array<Maybe<DetailedWorkTime>>>;
  /** Whether the TimeEntry has been edited afterwards. */
  external_edit?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the TimeEntry has been stopped externally. */
  external_stop?: Maybe<Scalars['Boolean']['output']>;
  /** The end of a TimeEntry. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** The id of the TimeEntry */
  id: Scalars['ID']['output'];
  /** Whether the user of the TimeEntry is currently pausing */
  is_pausing?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the TimeEntry is running without any running pause */
  is_working?: Maybe<Scalars['Boolean']['output']>;
  /** The users latest pause. */
  latest_pause?: Maybe<Pause>;
  /** The Notes of this TimeEntry */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** The sum of the duration of all pauses of this TimeEntry. */
  pause_duration?: Maybe<Scalars['Int']['output']>;
  /** All pauses for this time entry. */
  pauses?: Maybe<Array<Maybe<Pause>>>;
  /** The start of a TimeEntry. */
  started_at?: Maybe<Scalars['String']['output']>;
  /** Whether the TimeEntry is a timeOff or not. */
  time_off?: Maybe<Scalars['Boolean']['output']>;
  /** The type of the timeOff if given */
  time_off_type?: Maybe<Scalars['String']['output']>;
  /** The user of a TimeEntry */
  user?: Maybe<User>;
  /** The time between start and end of the TimeEntry minus the duration of all pauses */
  worked_seconds?: Maybe<Scalars['Int']['output']>;
};

export type TimeEntryPagination = {
  __typename?: 'TimeEntryPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<TimeEntry>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** A TimeEntryRequest */
export type TimeEntryRequest = {
  __typename?: 'TimeEntryRequest';
  /** The calculated detailed work time */
  detailed_work_time?: Maybe<Array<Maybe<DetailedWorkTime>>>;
  /** The end of a TimeEntryRequest. */
  finished_at?: Maybe<Scalars['String']['output']>;
  /** The id of the TimeEntryRequest */
  id: Scalars['ID']['output'];
  /** The Note of this TimeEntryRequest */
  note?: Maybe<Scalars['String']['output']>;
  /** All PauseRequests for this TimeEntryRequest. */
  pauseRequests?: Maybe<Array<Maybe<PauseRequest>>>;
  /** The start of a TimeEntryRequest. */
  started_at?: Maybe<Scalars['String']['output']>;
  /** The timeEntryId of the TimeEntryRequest */
  time_entry_id?: Maybe<Scalars['Int']['output']>;
  /** The user of a TimeEntryRequest */
  user?: Maybe<User>;
};

export type TimeEntryRequestPagination = {
  __typename?: 'TimeEntryRequestPagination';
  /** Current page of the cursor */
  current_page: Scalars['Int']['output'];
  /** List of items on the current page */
  data?: Maybe<Array<Maybe<TimeEntryRequest>>>;
  /** Number of the first item returned */
  from?: Maybe<Scalars['Int']['output']>;
  /** Determines if cursor has more pages after the current page */
  has_more_pages: Scalars['Boolean']['output'];
  /** The last page (number of pages) */
  last_page: Scalars['Int']['output'];
  /** Number of items returned per page */
  per_page: Scalars['Int']['output'];
  /** Number of the last item returned */
  to?: Maybe<Scalars['Int']['output']>;
  /** Number of total items selected by the query */
  total: Scalars['Int']['output'];
};

/** A TimeOff */
export type TimeOff = {
  __typename?: 'TimeOff';
  /** The date of the TimeOff entry as unix time stamp. */
  date?: Maybe<Scalars['Int']['output']>;
  /** The duration of the TimeOff entry. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The id of the TimeOff */
  id: Scalars['ID']['output'];
  /** The type of the TimeOff entry. */
  type?: Maybe<Scalars['String']['output']>;
  /** The user of a TimeEntry */
  user?: Maybe<User>;
};

/** A user */
export type User = {
  __typename?: 'User';
  /** The boolean whether timeEntries of this User should be approved automatically */
  automatic_approval_of_timeEntries?: Maybe<Scalars['Boolean']['output']>;
  /** The URL to the avatar of the user */
  avatar?: Maybe<Scalars['String']['output']>;
  /** The bambooId of the User */
  bambooId?: Maybe<Scalars['String']['output']>;
  /** The email of user */
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  /** The id of the user */
  id: Scalars['ID']['output'];
  /** Returns true when the User has admin rights. */
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  /** The users latest time entry. */
  latest_time_entry?: Maybe<TimeEntry>;
  /** The prefixed id of the user in order to login automatically via pin login */
  loginId?: Maybe<Scalars['String']['output']>;
  /** The name of the User */
  name?: Maybe<Scalars['String']['output']>;
  /** The Notes of the user */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** The users permissions. */
  permissions?: Maybe<Array<Maybe<Permission>>>;
  /** The photo of the user */
  photo?: Maybe<Scalars['String']['output']>;
  /** The pin of the user */
  pin?: Maybe<Scalars['String']['output']>;
  /** The time entries of the user */
  timeEntries?: Maybe<Array<Maybe<TimeEntry>>>;
};

export type TimeEntryFieldsFragment = { __typename?: 'TimeEntry', id: string, started_at?: string | null, finished_at?: string | null, worked_seconds?: number | null, pause_duration?: number | null, time_off?: boolean | null, time_off_type?: string | null, external_edit?: boolean | null, external_stop?: boolean | null, is_working?: boolean | null, detailed_work_time?: Array<{ __typename?: 'DetailedWorkTime', startTime?: string | null, endTime?: string | null, duration?: number | null } | null> | null, user?: { __typename?: 'User', name?: string | null } | null, notes?: Array<{ __typename?: 'Note', text?: string | null, created_at?: string | null, author?: { __typename?: 'User', id: string, name?: string | null } | null } | null> | null, latest_pause?: { __typename?: 'Pause', started_at?: string | null, finished_at?: string | null, duration?: number | null, forced?: boolean | null } | null, pauses?: Array<{ __typename?: 'Pause', started_at?: string | null, finished_at?: string | null, duration?: number | null, forced?: boolean | null } | null> | null } & { ' $fragmentName'?: 'TimeEntryFieldsFragment' };

export type UserFieldsFragment = { __typename?: 'User', id: string, pin?: string | null, photo?: string | null, firstName?: string | null, loginId?: string | null, latest_time_entry?: (
    { __typename?: 'TimeEntry' }
    & { ' $fragmentRefs'?: { 'TimeEntryFieldsFragment': TimeEntryFieldsFragment } }
  ) | null, permissions?: Array<{ __typename?: 'Permission', name?: string | null } | null> | null } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type TimeEntryQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeEntryQuery = { __typename?: 'Query', timeEntry?: { __typename?: 'TimeEntry', id: string, detailed_work_time?: Array<{ __typename?: 'DetailedWorkTime', duration?: number | null, endTime?: string | null } | null> | null } | null };

export type TimeEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeEntriesQuery = { __typename?: 'Query', timeEntries?: { __typename?: 'TimeEntryPagination', total: number, last_page: number } | null };

export type LoginByEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginByEmailMutation = { __typename?: 'Mutation', login?: { __typename?: 'Login', accessToken?: string | null, expiresAt?: string | null, user?: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    ) | null } | null };
