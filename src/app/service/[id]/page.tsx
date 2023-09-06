import React from 'react';
import {BreadcrumbsSection} from '~widgets/BreadcrumbsSection';
import {IBreadcrumb} from '~shared/types/IBreadcrumb';
import {Navigate} from '~shared/ui/Navigate/Navigate';
import {PageWrapper} from '~app/page-wrapper';
import {ServiceSection} from '~widgets/ServiceSection';
import {ReviewsSection} from '~widgets/ReviewsSection';
import {client} from '~shared/api/Client';
import {IService} from '~shared/types/IService';
import {IReview} from '~shared/types/IReview';

interface GameProps {
  params: {id: string};
}

async function _getServiceById(id: string): Promise<IService | null> {
  try {
    return await client.services.getServiceById(id);
  } catch (e) {
    return null;
  }
}

async function _getReviewsByServiceName(id: string): Promise<IReview[] | []> {
  try {
    const response = await client.reviews.getReviewsByServiceName(id);
    return response.records;
  } catch (e) {
    return [];
  }
}

export default async function Service({params}: GameProps) {
  const service = await _getServiceById(params.id);
  if (!service) return <Navigate to={'/'} />;

  const reviews = await _getReviewsByServiceName(service.fields.name);

  const breadcrumbsItems: IBreadcrumb[] = [
    {label: 'Главная', url: '/'},
    {label: service.fields.name, url: `/service/${params.id}`},
  ];

  return (
    <PageWrapper>
      <BreadcrumbsSection items={breadcrumbsItems} />
      <ServiceSection service={service} />
      <ReviewsSection reviews={reviews} />
    </PageWrapper>
  );
}
