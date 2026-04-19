import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuerySlug } from '../hooks/productHooks';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { getError } from '../utils';
import type { ApiError } from '../types/ApiError';

export default function Product() {
  const params = useParams();
  const { slug } = params;
  const {
    data : product,
    isLoading,
    error
  } = useGetProductsQuerySlug(slug!);
  return (
    isLoading ? (
      <LoadingBox/>
    ): error ? (
      <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
    ) : !product ? (
      <MessageBox variant="danger">Product Not Found</MessageBox>
    ) : 
    (<div>Product</div>)
  )
}
