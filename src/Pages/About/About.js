import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  const description = [
    `your online haven for book lovers! Dive into a world of literary treasures and embark on a thrilling journey of book discovery at BookShelf, the ultimate destination for preloved pages.`,
    `At BookShelf, we believe that every book deserves a second chance, and we're passionate about connecting avid readers with the books they love. Whether you're a bibliophile seeking out rare finds, a student on a budget, or just looking for your next great read, BookShelf has something for everyone.`,
    `Browse through our virtual shelves stocked with a diverse collection of preowned books, spanning genres from classics to contemporary bestsellers, and everything in between. Discover hidden gems, explore new authors, and uncover forgotten stories waiting to be rediscovered. With an ever-changing inventory of books in pristine condition, you'll be sure to find a literary treasure that captures your imagination.`,
    `But BookShelf is more than just a marketplace for books. It's a vibrant community of book enthusiasts, where you can connect with fellow readers, share recommendations, and engage in bookish discussions. Join our book clubs, participate in virtual events and giveaways, and immerse yourself in the joy of reading with like-minded book lovers from around the world.`,
    `Selling your own preloved books is a breeze at BookShelf too! List your gently used books for sale, set your own prices, and connect with bookworms who will give your books a new home. It's a sustainable way to share the joy of reading and reduce your carbon footprint by giving books a new lease on life.`,
    `At BookShelf, we're committed to providing a seamless and secure shopping experience, with reliable shipping options, easy payment methods, and excellent customer service. So why wait? Join us at BookShelf and embark on a bookish adventure unlike any other. Step into our virtual marketplace and let the magic of books captivate you. Happy reading!`,
  ];

  return (
    <div>
      <Helmet>
        <title>login - BookShelf</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600 text-center my-7">Welcome to BookShelf</h2>
      <div className="flex flex-col items-center justify-center w-10/12 mx-auto my-10">
        {description.map((des) => (
          <p className="my-3">{des}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
