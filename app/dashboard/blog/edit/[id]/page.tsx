import React from 'react'

import { editBlogById } from '@/lib/actions/blog';
import EditForm from './_components/edit-form';
import { IBlogDetail } from '@/lib/types';

async function page({ params }: { params: { id: string }}) {

  const { data: blog } = await editBlogById(params?.id);

  return (
    <EditForm blog={blog as IBlogDetail} />
  );
}

export default page