'use client';
import {useStore} from 'effector-react';
import {storeUser} from '~shared/store/User';
import {useRouter} from 'next/navigation';
import {PageWrapper} from '~app/page-wrapper';
import {Container} from '~shared/ui/Container/Container';
import {Preloader} from '~shared/ui/Preloader';

export default function Cabinet() {
  const {isAuth, user} = useStore(storeUser);
  const router = useRouter();
  if (typeof window === 'undefined') {
    return (
      <PageWrapper>
        <Preloader />
      </PageWrapper>
    );
  }
  if (!isAuth || !user) {
    router.push('/');
  } else {
    return (
      <PageWrapper>
        <Container>
          <div>{user.email}</div>
        </Container>
      </PageWrapper>
    );
  }
}
