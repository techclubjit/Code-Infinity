import { GetStaticProps } from 'next';
import Youtube from 'react-Youtube';
import Page from '@components/page';
import JobsGrid from '@components/jobs-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllJobs } from '@lib/cms-api';
import { Job } from '@lib/types';
import styles from '@components/header.module.css';

type Props = {
  jobs: Job[];
};


export default function AboutUs({ jobs }: Props) {
  const meta = {
    title: 'About Code-Infinity',
    description: "Jyothy Institute of Technology under the governance of Jyothy Charitable Trust which is headquartered at Bengaluru mainly focuses on delivering quality education that equips students for life and career. We offer Undergraduate, Postgraduate and Research Programmes in various disciplines. Focused teaching facilities coupled with practical and forward-thinking programmes lend a hand to students throughout their academic period. A significant amount of emphasis is given for extracurricular activities through various clubs, technical chapters, sports, and cultural activities."
  };

  return (
    <Page meta={meta}>
      <Layout>
      <div class="min-h-screen flex items-center justify-center">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-1 p-4">
            <div class=" text-lg text-center p-14 rounded-lg"><h1>About Code-Infinity</h1><div>Jyothy Institute of Technology under the governance of Jyothy Charitable Trust which is headquartered at Bengaluru mainly focuses on delivering quality education that equips students for life and career. We offer Undergraduate, Postgraduate and Research Programmes in various disciplines. Focused teaching facilities coupled with practical and forward-thinking programmes lend a hand to students throughout their academic period. A significant amount of emphasis is given for extracurricular activities through various clubs, technical chapters, sports, and cultural activities.</div></div>
            <div class="  text-lg  text-center p-14 rounded-lg"><iframe width="460" height="515" src="https://www.youtube.com/embed/xnKNFX_6z2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class=" text-lg  text-center p-14 rounded-lg"><iframe width="560" height="415" src="https://www.youtube.com/embed/NNpHSGN__4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div class=" text-lg  text-center p-14 rounded-lg">Our mission at Tech Club of JyothyIT is to empower students of all experience levels and backgrounds to dream big and build a project from scratch. Join 200+ students across the globe for an unforgettable 24 hours of connecting, learning, and creating. We’ll handle all the details so that you can focus on turning your ideas into reality.</div>
         
        </div>
    </div>
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
