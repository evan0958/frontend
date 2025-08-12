import { PLASMIC } from './plasmic';
import LeadSearch from '../components/LeadSearch';

// Register the LeadSearch component with Plasmic's loader
PLASMIC.registerComponent(LeadSearch, {
  name: 'LeadSearch',
  props: {
    onSelect: { type: 'eventHandler' },
  },
});
