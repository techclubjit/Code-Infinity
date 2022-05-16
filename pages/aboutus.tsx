import { GetStaticProps } from 'next';

import Page from '@components/page';
import JobsGrid from '@components/jobs-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllJobs } from '@lib/cms-api';
import { Job } from '@lib/types';

type Props = {
  jobs: Job[];
};

export default function AboutUs({ jobs }: Props) {
  const meta = {
    title: 'About Us - Code Infinity',
    description: "Jyothy Institute of Technology under the governance of Jyothy Charitable Trust which is headquartered at Bengaluru mainly focuses on delivering quality education that equips students for life and career. We offer Undergraduate, Postgraduate and Research Programmes in various disciplines. Focused teaching facilities coupled with practical and forward-thinking programmes lend a hand to students throughout their academic period. A significant amount of emphasis is given for extracurricular activities through various clubs, technical chapters, sports, and cultural activities."
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="About Us" description={meta.description} />
        <JobsGrid jobs={jobs} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jobs = await getAllJobs();

  return {
    props: {
      jobs
    },
    revalidate: 60
  };
};
