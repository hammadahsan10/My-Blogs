import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './Blogs.css';

const MyBlogs = () => {
  //data.js

  const data = [
    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },

    {
      id: 4,
      date: "Aug 2018",
      title: "Atitlán",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },

    {
      id: 5,
      date: "Dec 2018",
      title: "oops",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },

    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },

    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 1,
      date: "May 2018",
      title: "abc",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
    {
      id: 2,
      date: "December 2019",
      title: "Secret",
      description:
        "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",

    },

    {
      id: 3,
      date: "June 2018",
      title: "Lake",
      description:
        "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
    },
  ]


  return (
    <div>
      <Cards
        data={data}
        editable={true}

      />
    </div>
  )
}

export default MyBlogs
