import PublishProduct from '@/app/pages/Products/PublishProduct/PublishProduct';
import React from 'react'

export const metadata = {
  title: "Publish Product",
  layout: "admin",
};

function page() {
  return (
    <div>
      <PublishProduct />
    </div>
  )
}

export default page
