import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../roomDetail/roomDetail.css';

const Gallery = () => {
    return (
        <>
            <div className='container'>
            <div className='row'>
                    <ul>
                        <li>Gallery</li><hr className='hr' />
                        <li>Amenities</li>
                    </ul><hr />
                <div className='col-sm-4'>
                    <img className='gallery' src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/357383322_640808891412489_350167220395169589_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=g4r-ywASlHcAX_HpnVk&_nc_ht=scontent.fdad1-1.fna&oh=00_AfAIAayyj4PumwRcfGbKPtPtjZQ7l9ltC2zRE0KklXktAA&oe=64B529FC" alt="" />
                    <img className='gallery' src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/338745196_544260854501211_5446266257769766182_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bouGGvQAK9wAX_6Z_mB&_nc_ht=scontent.fdad1-1.fna&oh=00_AfD2iR3z5jz_wMrAHxuw0muMjLwZaMBruh6siVo4EaGZ1g&oe=64B50501" alt="" />
                    <img className='gallery' src="https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/339054007_1941150582917104_3191451272829946780_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4F8SZGtK5icAX_wYfMV&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCscyzEfq5oPttOAK-XzAg4xQD2F40dowu2YhJSTdO1UQ&oe=64B604EF" alt="" />
                </div>
                <div className='col-sm-4'>
                    <img className='gallery' src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/391093780.jpg?k=5f7574fbd435e7f891c7bd540b465ea344319b594a355ca1fd7004b06a5dcaa4&o=&hp=1" alt="" />
                    <img className='gallery' src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/339299939_798032614487044_5189451999146848460_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sHz0oOiv50IAX_uh_l_&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCb2kCgDiexxVGO1LQ06A_sEDFFFix6097MGTtQ5zAc3Q&oe=64B52DC6" alt="" />
                    <img className='gallery' src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/339625083_142587608763056_1800036877737200632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IQV8wwNPxOYAX_mEf7u&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCMH60ak4c_0rGXUTqYMNSFTG2S_EaAwSNoLrzNwXgvXQ&oe=64B68F44" alt="" />
                </div>
                <div className='col-sm-4'>
                    <img className='gallery' src="https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/358096538_640808904745821_7498319917288293219_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JmHkfqWRDmcAX9-gLav&_nc_ht=scontent.fdad1-4.fna&oh=00_AfB5PXNwlZ9VvudDdctq2tl-H7riyhQtNCaxrXHnKkvrxA&oe=64B65A10" alt="" />
                    <img className='gallery' src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/339566222_578849804207825_5875360057537982281_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GhFlUYF4s5IAX9syThm&_nc_ht=scontent.fdad1-1.fna&oh=00_AfB0B6VxTf4qhoOIctkB8i1KRVnQDqLZ6fUitokmRAPNUw&oe=64B53C4E" alt="" />
                </div>
            </div>
            </div>
        </>
    )
}

export default Gallery;