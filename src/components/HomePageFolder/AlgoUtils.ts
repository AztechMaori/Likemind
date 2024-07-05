import type { Setter } from "solid-js"
import type { SetStoreFunction } from "solid-js/store"


export enum ProjectType {
  Groups = "Groups",
  Events = "Events",
  Bounties = "Bounties",
  Queries = "Queries"
}


export enum Base {
  For_You,
  Following
}


export interface AlgoData {
  ProjectType: ProjectType
  Filters: string[]
  Search?: string
}

export enum FilterType {
  Likemind,
  Custom,
  Portfolio
}

export type Filter = [FilterType, string]


