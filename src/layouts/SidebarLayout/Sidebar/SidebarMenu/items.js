import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BarChartIcon from '@mui/icons-material/BarChart';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Crypto',
        link: '/dashboards/crypto',
        icon: MonetizationOnTwoToneIcon,
      },
      {
        name: 'Analytics',
        link: '/dashboards/analytics',
        icon: BarChartIcon,
      },
      {
        name: 'Chat',
        icon: ForumTwoToneIcon,
        link: '/dashboards/messenger'
      },
      
    ]
  },
  {
    heading: 'Management',
    items: [
      {
        name: 'Transactions',
        icon: PaymentsTwoToneIcon,
        link: '/management/transactions'
      },
      {
        name: 'User',
        icon: AccountCircleTwoToneIcon,
        link: '/management/profile/settings',
        // items: [
        //   {
        //     name: 'Profile Details',
        //     link: '/management/profile/details'
        //   },
        //   {
        //     name: 'User Settings',
        //     link: '/management/profile/settings'
        //   }
        // ]
      }
    ]
  },
  {
    heading: 'Components',
    items: [
      {
        name: 'Base',
        icon: ExtensionTwoToneIcon,
        link: '/components/base',
        items: [
          {
            name: 'Accordions',
            link: '/components/accordions'
          },
          {
            name: 'Cards',
            link: '/components/cards'
          },
          {
            name: 'Tooltips',
            link: '/components/tooltips'
          },
          {
            name: 'Modals',
            link: '/components/modals'
          },

          {
            name: 'Tabs',
            link: '/components/tabs'
          },
          {
            name: 'Avatars',
            link: '/components/avatars'
          },
          {
            name: 'Badges',
            link: '/components/badges'
          }
        ]
      },
      {
        name: 'Buttons',
        icon: BallotTwoToneIcon,
        link: '/components/buttons'
      },

      {
        name: 'Forms',
        icon: ArticleTwoToneIcon,
        link: '/components/forms'
      }
    ]
  },
  {
    heading: 'Other',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: HomeTwoToneIcon,
      }
    ]
  },
  {
    heading: 'Extra Pages',
    items: [
      {
        name: 'Status',
        icon: VerifiedUserTwoToneIcon,
        link: '/status',
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      }
    ]
  }
];

export default menuItems;
