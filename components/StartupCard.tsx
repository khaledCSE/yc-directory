import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface StartupCardType {
  _id: number;
  title: string;
  description: string;
  category: string;
  author: {
    _id: number;
    name: string
  };
  views: number;
  _createdAt: Date;
  image: string;
}

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const { _id, category, description, title, views, image, _createdAt, author: { _id: authorId, name } } = post

  return (
    <li className='startup-card group'>
      <div className='flex-between'>
        <p className='startup-card-date'>{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className='size-6 text-primary' />
          <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className='text-16-medium line-clamp-1'>
              {name}
            </p>
          </Link>

          <Link href={`/startups/${_id}`}>
            <h3 className='text-26-semibold'>{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src='https://placeholder.co/48x48'
            alt='placeholder'
            className='rounded-full'
            width={48}
            height={48}
          />
        </Link>
      </div>

      <Link href={`/startups/${_id}`}>
        <p className='startup-card_desc'>{description}</p>

        <img src={image} alt={title} className='startup-card_img' />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button className='startup-card_btn' asChild>
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard