export const fetchBooks = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/books') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              books: [
                {
                  id: 1,
                  title: 'To Kill a Mockingbird',
                  author: 'Harper Lee',
                  publisher: 'HarperCollins',
                  year: 1960,
                  image:
                    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41j-s9fHJcL.jpg',
                  price: 9.99,
                  read: false,
                },
                {
                  id: 2,
                  title: '1984',
                  author: 'George Orwell',
                  publisher: 'Penguin Books',
                  year: 1949,
                  image:
                    'https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg',
                  price: 8.99,
                  read: true,
                },
                {
                  id: 3,
                  title: 'The Catcher in the Rye',
                  author: 'J.D. Salinger',
                  publisher: 'Little, Brown and Company',
                  year: 1951,
                  image:
                    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91HPG31dTwL.jpg',
                  price: 10.99,
                  read: false,
                },
                {
                  id: 4,
                  title: 'The Great Gatsby',
                  author: 'F. Scott Fitzgerald',
                  publisher: 'Scribner',
                  year: 1925,
                  image:
                    'https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg',
                  price: 7.99,
                  read: true,
                },
                {
                  id: 5,
                  title: 'Brave New World',
                  author: 'Aldous Huxley',
                  publisher: 'Harper Perennial Modern Classics',
                  year: 1932,
                  image:
                    'https://pagdandi.org/wp-content/uploads/2021/04/Brave-New-World.jpg',
                  price: 12.99,
                  read: false,
                },
                {
                  id: 6,
                  title: 'Pride and Prejudice',
                  author: 'Jane Austen',
                  publisher: 'Penguin Classics',
                  year: 1813,
                  image:
                    'https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg',
                  price: 6.99,
                  read: true,
                },
                {
                    id: 7,
                    title: 'The Lord of the Rings',
                    author: 'J.R.R. Tolkien',
                    publisher: 'Allen & Unwin',
                    year: 1954,
                    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSp7Ku27YCti9T1OzemmOSpQ0m-KwcmJ2AXuI16QMONFduXMC-U',
                    price: 15.99,
                    read: true,
                  },
                  {
                    id: 8,
                    title: 'The Alchemist',
                    author: 'Paulo Coelho',
                    publisher: 'HarperOne',
                    year: 1988,
                    image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
                    price: 11.99,
                    read: true,
                  }
                  
              ],
              user: {
                name: 'Raju',
                bio: '25 din mein paisa double',
                img: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/12/no-akshay-kumar-no-hera-pheri-3-finally-worked-producers-to-bring-back-khiladi-001.jpg',
              },
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Books list not found.',
          })
        }
      }, 2000)
    })
  }