import MainLayout from '../layout/MainLayout';
import ResultsRetryButton from '../results/ResultsRetryButton';

import CenteredCard from './CenteredCard';
import CenteredCardContent from './CenteredCardContent';

export default function Error500(): JSX.Element {
  return (
    <MainLayout>
      <CenteredCard>
        <CenteredCardContent
          title="An error occured"
          description="Sorry, an error occurred, we invite you to refresh the page"
          iconClasses="fa fa-exclamation-circle text-warning mb-4"
        >
          <ResultsRetryButton autoRetry={false} />
        </CenteredCardContent>
      </CenteredCard>
    </MainLayout>
  );
}