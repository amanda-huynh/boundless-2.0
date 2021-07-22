/* ##
## Copyright (c) 2019 Wind River Systems, Inc.
##
## Licensed under the Apache License, Version 2.0 (the "License");
## you may not use this file except in compliance with the License.
## You may obtain a copy of the License at:
##       http://www.apache.org/licenses/LICENSE-2.0
## Unless required by applicable law or agreed to in writing, software  distributed
## under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
## OR CONDITIONS OF ANY KIND, either express or implied.

Name:     boundless.config.js
Purpose:  To provide static configurable start-up parameters for the program

## */

import { databaseConfig } from './database.cred'
import sha256 from 'sha256'

export const defaultImages = {
  // the images must be inside the src/statics/
  projects: {
    tableBanner: 'images/Project-Search-Banner.v1.png',
    webBanner: 'images/Project-banner.v1.png',
    mainImage: ''
  },
  challenges: {
    tableBanner: 'images/Challenge-Search-Banner.v1.png',
    webBanner: 'images/ChallengeBanner.v1.png',
    mainImage: ''
  }
}

export const firebaseConfigs = databaseConfig

export const layoutConfig = {
  homeName: '',
  homeURL: '',
  companyName: '',
  defaultImg: '',
  switchDatabase: false,
  // hairCut: false, // feature for later
  challenges: false
}

export const dbMeta = {
  // data_scheme: null, // data scheme will go here
  collections: ['config', 'projects', 'users', 'challenges'],
  db_version: '0.0.0.0',
  admin: {
    username: 'admin',
    password: sha256('nimda')
  }
}

// core data that gets loaded the very first time the software runs
//
export const configSkeleton = {
  allowedDomain: [],
  bodyContentType: [
    { label: 'Markdown/HTML', value: 'MARKDOWN' },
    { label: 'URL List', value: 'ORDERED_LIST' }
  ],
  challengesConfig: {
    keywords: [],
    listingTable: {
      bannerImg: {
        active: false,
        url: ''
      }
    },
    webpage: {
      bannerImg: {
        active: false,
        url: ''
      },
      mainImg: {
        active: false,
        url: ''
      }
    }
  },
  chipContentType: [
    { label: 'Source', value: 'SOURCE' },
    { label: 'Video', value: 'VIDEO' },
    { label: 'Custom', value: 'CUSTOM' }
  ],
  config_version: '0.0.0.2',
  customChips: [
    { label: 'Video', value: 'movie' },
    { label: 'Source', value: 'code' },
    { label: 'Face', value: 'face' },
    { label: 'DNS', value: 'dns' },
    { label: 'Extension', value: 'extension' },
    { label: 'Eco', value: 'eco' },
    { label: 'Feedback', value: 'feedback' }
  ],
  enabledChallenges: layoutConfig.challenges,
  extraKeywordsData: {},
  keywords: {},
  newFlag: 15,
  pagination: 50,
  projectsConfig: {
    keywords: [],
    listingTable: {
      bannerImg: {
        active: false,
        url: ''
      }
    },
    webpage: {
      bannerImg: {
        active: false,
        url: ''
      },
      mainImg: {
        active: false,
        url: ''
      }
    }
  },
  socialNetwork: {
    list: [
      { label: 'GitHub', value: 'github' },
      { label: 'Facebook', value: 'facebook' },
      { label: 'LinkedIn', value: 'linkedin' }
    ],
    use: []
  },
  suggestedKeywords: []
}
