import {
  AgentPubKeyB64,
  HeaderHashB64,
  EntryHashB64,
 Dictionary } from "@holochain-open-dev/core-types";

export interface Todo {
  id: string | number;
  description: string;
  status: boolean;
}
export interface TodoList {
  id?: string;
  todos: Todo[];
}

export interface CreateEntryResponse {
  header: HeaderHashB64;
  entry: EntryHashB64;
}