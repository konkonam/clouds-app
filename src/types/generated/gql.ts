/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment TimeEntryFields on TimeEntry {\n        id\n        started_at\n        finished_at\n        worked_seconds\n        pause_duration\n        time_off\n        time_off_type\n        external_edit\n        external_stop\n        is_working\n        detailed_work_time {\n            startTime\n            endTime\n            duration\n        }\n        user {\n            name\n        }\n        notes {\n            text\n            author {\n                id\n                name\n            }\n            created_at\n        }\n        latest_pause {\n            started_at\n            finished_at\n            duration\n            forced\n        }\n        pauses {\n            started_at\n            finished_at\n            duration\n            forced\n        }\n    }\n": types.TimeEntryFieldsFragmentDoc,
    "\n    fragment UserFields on User {\n        id\n        pin\n        latest_time_entry {\n            ...TimeEntryFields\n        }\n        permissions {\n            name\n        }\n        photo\n        firstName\n        loginId\n    }\n": types.UserFieldsFragmentDoc,
    "\n            query TimeEntry {\n                timeEntry {\n                    id\n                    detailed_work_time {\n                        duration\n                        endTime\n                        duration\n                    }\n                }\n            }\n        ": types.TimeEntryDocument,
    "\n            query TimeEntries {\n                timeEntries {\n                    total\n                    last_page\n\n                }\n            }\n        ": types.TimeEntriesDocument,
    "\n            mutation LoginByEmail($email: String!, $password: String!) {\n                login(email: $email, password: $password) {\n                    accessToken\n                    expiresAt\n                    user {\n                        ...UserFields\n                    }\n                }\n            }\n\n        ": types.LoginByEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment TimeEntryFields on TimeEntry {\n        id\n        started_at\n        finished_at\n        worked_seconds\n        pause_duration\n        time_off\n        time_off_type\n        external_edit\n        external_stop\n        is_working\n        detailed_work_time {\n            startTime\n            endTime\n            duration\n        }\n        user {\n            name\n        }\n        notes {\n            text\n            author {\n                id\n                name\n            }\n            created_at\n        }\n        latest_pause {\n            started_at\n            finished_at\n            duration\n            forced\n        }\n        pauses {\n            started_at\n            finished_at\n            duration\n            forced\n        }\n    }\n"): (typeof documents)["\n    fragment TimeEntryFields on TimeEntry {\n        id\n        started_at\n        finished_at\n        worked_seconds\n        pause_duration\n        time_off\n        time_off_type\n        external_edit\n        external_stop\n        is_working\n        detailed_work_time {\n            startTime\n            endTime\n            duration\n        }\n        user {\n            name\n        }\n        notes {\n            text\n            author {\n                id\n                name\n            }\n            created_at\n        }\n        latest_pause {\n            started_at\n            finished_at\n            duration\n            forced\n        }\n        pauses {\n            started_at\n            finished_at\n            duration\n            forced\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment UserFields on User {\n        id\n        pin\n        latest_time_entry {\n            ...TimeEntryFields\n        }\n        permissions {\n            name\n        }\n        photo\n        firstName\n        loginId\n    }\n"): (typeof documents)["\n    fragment UserFields on User {\n        id\n        pin\n        latest_time_entry {\n            ...TimeEntryFields\n        }\n        permissions {\n            name\n        }\n        photo\n        firstName\n        loginId\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            query TimeEntry {\n                timeEntry {\n                    id\n                    detailed_work_time {\n                        duration\n                        endTime\n                        duration\n                    }\n                }\n            }\n        "): (typeof documents)["\n            query TimeEntry {\n                timeEntry {\n                    id\n                    detailed_work_time {\n                        duration\n                        endTime\n                        duration\n                    }\n                }\n            }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            query TimeEntries {\n                timeEntries {\n                    total\n                    last_page\n\n                }\n            }\n        "): (typeof documents)["\n            query TimeEntries {\n                timeEntries {\n                    total\n                    last_page\n\n                }\n            }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n            mutation LoginByEmail($email: String!, $password: String!) {\n                login(email: $email, password: $password) {\n                    accessToken\n                    expiresAt\n                    user {\n                        ...UserFields\n                    }\n                }\n            }\n\n        "): (typeof documents)["\n            mutation LoginByEmail($email: String!, $password: String!) {\n                login(email: $email, password: $password) {\n                    accessToken\n                    expiresAt\n                    user {\n                        ...UserFields\n                    }\n                }\n            }\n\n        "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;