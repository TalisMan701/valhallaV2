'use client';
import {useStore} from 'effector-react';
import {storeUser} from '~shared/store/User';
import {useRouter} from 'next/navigation';
import {PageWrapper} from '~app/page-wrapper';
import {Container} from '~shared/ui/Container/Container';

export default function Cabinet() {
  const {isAuth, user} = useStore(storeUser);
  const router = useRouter();
  if (!isAuth || !user?.user) {
    router.push('/');
  } else {
    return (
      <PageWrapper>
        <Container>
          <div>{user.user.email}</div>
        </Container>
      </PageWrapper>
    );
  }
}
