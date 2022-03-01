import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PaymentsTwoToneIcon from '@mui/icons-material/PaymentsTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import ViewInArTwoToneIcon from '@mui/icons-material/ViewInArTwoTone';

const menuItems = [
  {
    heading: 'General',
    items: [
      {
        name: 'Analytics',
        link: '/dashboards/analytics',
        icon: BarChartIcon
      },
      {
        name: 'Crypto',
        link: '/dashboards/crypto',
        icon: MonetizationOnTwoToneIcon
      },
      {
        name: 'Chat',
        icon: ForumTwoToneIcon,
        link: '/dashboards/messenger'
      }
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
        link: '/management/profile/settings'
      }
    ]
  },
  {
    heading: 'Components',
    items: [
      {
        name: 'Base',
        icon: ViewInArTwoToneIcon,
        link: '/components/base',
        items: [
          {
            name: 'Accordions',
            link: '/components/accordions'
          },
          {
            name: 'Avatars',
            link: '/components/avatars'
          },
          {
            name: 'Badges',
            link: '/components/badges'
          },
          {
            name: 'Buttons',
            link: '/components/buttons'
          },
          {
            name: 'Cards',
            link: '/components/cards'
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
            name: 'Tooltips',
            link: '/components/tooltips'
          }
        ]
      },
      {
        name: 'Charts',
        icon: PieChartTwoToneIcon,
        link: '/components/charts'
      },

      {
        name: 'Forms',
        icon: ArticleTwoToneIcon,
        link: '/components/forms'
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
  },
  {
    heading: 'Other',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: HomeTwoToneIcon
      }
    ]
  }
];

export default menuItems;
