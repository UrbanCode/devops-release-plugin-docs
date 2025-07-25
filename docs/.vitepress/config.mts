import { defineConfig } from 'vitepress'

// Directory name for plugins
const PLUGIN_BASE_DIR = 'plugin';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/devops-release-plugin-docs/",
  title: "DevOps Release Plugins",
  description: "Documentation for IBM DevOps Release Plugins",
  appearance: "dark",
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 4000, // Set your desired limit in KB
    },
    assetsInclude: ['**/*.PNG', '**/*.png']
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/UrbanCode/devops-release-plugin-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `plugin/DeployReport` directory.
      [`/${PLUGIN_BASE_DIR}/DeployReport/`]: [
        {
          text: 'Deployment Reports', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/DeployReport/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/DeployReport/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/DeployReport/usage` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/DeployReport/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/DeployReport/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/RTC` directory.
      [`/${PLUGIN_BASE_DIR}/RTC/`]: [
        {
          text: 'Rational Team Concert v6', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/RTC/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/RTC/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/RTC/usage` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/RTC/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/RTC/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/Rally` directory.
      [`/${PLUGIN_BASE_DIR}/Rally/`]: [
        {
          text: 'Rally', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/Rally/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/Rally/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/Rally/usage` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/Rally/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/Rally/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ibm-urbancode-deploy` directory.
      [`/${PLUGIN_BASE_DIR}/ibm-urbancode-deploy/`]: [
        {
          text: 'IBM UrbanCode Deploy', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ibm-urbancode-deploy/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ibm-urbancode-deploy/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/ibm-urbancode-deploy/usage` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ibm-urbancode-deploy/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/ibm-urbancode-deploy/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/servicenow-4` directory.
      [`/${PLUGIN_BASE_DIR}/servicenow-4/`]: [
        {
          text: 'ServiceNow', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/servicenow-4/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/servicenow-4/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/servicenow-4/usage` },
            { text: 'Steps', link: `${PLUGIN_BASE_DIR}/servicenow-4/steps` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-jenkins-ci` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-jenkins-ci/`]: [
        {
          text: 'Jenkins for IBM UrbanCode Release', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-jenkins-ci/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-jenkins-ci/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/ucr-jenkins-ci/usage` },
            { text: 'Steps', link: `${PLUGIN_BASE_DIR}/ucr-jenkins-ci/steps` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-jenkins-ci/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-ansible` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-plugin-ansible/`]: [
        {
          text: 'Ansible Tower', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-plugin-ansible/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-plugin-ansible/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/ucr-plugin-ansible/usage` },
            { text: 'Steps', link: `${PLUGIN_BASE_DIR}/ucr-plugin-ansible/steps` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-plugin-ansible/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-hp-alm` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-plugin-hp-alm/`]: [
        {
          text: 'HP Quality Center (ALM)', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-plugin-hp-alm/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-plugin-hp-alm/overview` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-plugin-hp-alm/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/ucr-plugin-hp-alm/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-jira` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-plugin-jira/`]: [
        {
          text: 'Jira for IBM UrbanCode Release', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-plugin-jira/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-plugin-jira/overview` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-plugin-jira/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/ucr-plugin-jira/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-nolio` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-plugin-nolio/`]: [
        {
          text: 'CA Nolio', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-plugin-nolio/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-plugin-nolio/overview` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-plugin-nolio/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-slack` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-plugin-slack/`]: [
        {
          text: 'Slack for IBM UrbanCode Release', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-plugin-slack/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-plugin-slack/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/ucr-plugin-slack/usage` },
            { text: 'Steps', link: `${PLUGIN_BASE_DIR}/ucr-plugin-slack/steps` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-plugin-slack/downloads` }
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-plugin-tfs` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-plugin-tfs/`]: [
        {
          text: 'Microsoft Team Foundation Server (TFS)', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-plugin-tfs/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-plugin-tfs/overview` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-plugin-tfs/downloads` },
            { text: 'Settings', link: `${PLUGIN_BASE_DIR}/ucr-plugin-tfs/settings` } // Other items
          ]
        }
      ],

      // This sidebar gets displayed when a user
      // is on `plugin/ucr-xl-deploy` directory.
      [`/${PLUGIN_BASE_DIR}/ucr-xl-deploy/`]: [
        {
          text: 'XL Deploy', // Changed title
          items: [
            { text: 'About', link: `${PLUGIN_BASE_DIR}/ucr-xl-deploy/README` },
            { text: 'Overview', link: `${PLUGIN_BASE_DIR}/ucr-xl-deploy/overview` },
            { text: 'Usage', link: `${PLUGIN_BASE_DIR}/ucr-xl-deploy/usage` },
            { text: 'Steps', link: `${PLUGIN_BASE_DIR}/ucr-xl-deploy/steps` },
            { text: 'Downloads', link: `${PLUGIN_BASE_DIR}/ucr-xl-deploy/downloads` }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/devops-release-plugin-docs' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",

    }
  }
})
