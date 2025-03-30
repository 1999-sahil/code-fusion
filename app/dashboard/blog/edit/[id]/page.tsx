import React from 'react'

import { editBlogById } from '@/lib/actions/blog';
import EditForm from './_components/edit-form';
import { IBlogDetail } from '@/lib/types';

export type paramsType = Promise<{ id: string }>;

async function page(props: { params: paramsType }) {

  const { id } = await props.params;

  const { data: blog } = await editBlogById(id);

  return (
    <EditForm blog={blog as IBlogDetail} />
  );
}

export default page