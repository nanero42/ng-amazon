import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card, CardsComponent, HeaderComponent, SliderComponent } from 'src/app/components';
import { CardComponent } from 'src/app/components/cards/card';
import { LinkComponent } from 'src/app/components/link';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SliderComponent,
    CardsComponent,
    CardComponent,
    LinkComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  cards: Card[] = [
    {
      id: '24g35h35',
      title: 'Small gifts under $20',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      price_crossed: 55.00,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: '345h4tjh4',
      title: 'Deals in PCs',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: '56j56yj5rt4e',
      title: 'Toys under $25',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: '46j68utfgr3',
      title: 'Recommended deal for you',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: '78k6yhbetrgv3w',
      title: 'Beauty steals under $25',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'ryjnl98k6ybr',
      title: 'Deals on most-loved gifts',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: '67jtgbwg3rg',
      title: 'Home decor under $50',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'eth5uk5yh3rf',
      title: 'Shop holiday gift guides',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'asdfwrhyuj4rg',
      title: 'International Top Seller for you',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'sffgj7i77uyhrf',
      title: 'Customer\'s Most-Loved  fashion',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'sdfgrgj7i6jh4erfwv',
      title: 'Shop storage devices',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'efbh5y3efcbhj',
      title: 'Holiday deals in fashion',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'sdgui67yef',
      title: 'Shop holiday hosting essentials',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=3398&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 20,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
  ]

  cards2: Card[] = [
    {
      id: 'ergh674tgsdg',
      title: 'Web Scalability for Startup Engineers',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 39,
      price_cent: 78,
      price_crossed: 55.00,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'hm7u54rfsdvfu6',
      title: 'Reconfigurable Transceiver Architectural insights ect ect',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 109,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'erth6uk54twdf',
      title: 'ASP.NET Core 6 and Angular: Full-stack web development',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 54,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
    {
      id: 'fgh6uk66sdcbh',
      title: 'Angular for Enterprise Applications: Build scalable systems etc ect',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price_int: 39,
      price_cent: 99,
      currency_code: 'USD',
      currency_sign: '$',
    },
  ]

  keepShoppingCards: Card[] = [
    {
      id: 'rtgh5yj4ge',
      title: 'Desktop computers',
      image: 'https://i.pinimg.com/736x/a1/a0/37/a1a0374c887e43b64e5731e6757c7bf3.jpg',
      viewed_count: 1,
    },
    {
      id: 'fghj7iktg',
      title: 'Books',
      image: 'https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg',
      viewed_count: 10,
    },
  ]

  relatedCards: Card[] = [
    {
      id: 'dfh6ui4rgw',
      title: 'Designing Distributed Systems: Patterns and Paradigms for something',
      image: 'https://st2.depositphotos.com/1064024/6471/i/950/depositphotos_64713699-stock-photo-pile-of-old-books.jpg',
      price_int: 23,
      price_cent: 66,
      currency_sign: '$',
      price_crossed: 49.99,
    },
    {
      id: 'dfbfhjwer35uyk',
      title: 'Head First Design Patterns: Building Extensible and Maintainable',
      image: 'https://static8.depositphotos.com/1004221/832/i/950/depositphotos_8329452-stock-photo-pile-of-books-on-a.jpg',
      price_int: 41,
      price_cent: 94,
      currency_sign: '$',
      price_crossed: 79.99,
    },
    {
      id: 'asfehj6ui7ywef',
      title: 'Introduction to Algorithms, fourth edition',
      image: 'https://st.depositphotos.com/1049810/3841/i/950/depositphotos_38411117-stock-photo-books-in-library-room.jpg',
      price_int: 122,
      price_cent: 83,
      currency_sign: '$',
      price_crossed: 135.00,
    },
  ]

  shopDealsItem: Card[] = [
    {
      id: 'sf3rh4h4',
      image: 'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Save on Batteries from Energizer & Rayovac',
      discount: 41,
    },
  ];

  categories: Card[] = [
    {
      id: 'asvrh5ik54',
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Home & Kitchen',
    },
    {
      id: 'sdgdj6i64',
      image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Health & Household Supplies',
    },
    {
      id: 'fgh4tu5u43',
      image: 'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Beauty',
    },
    {
      id: 'sdfghrty3t283jf',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Grocery & Gourmet Foods',
    },
    {
      id: 'asdfgdjtui654fd',
      image: 'https://plus.unsplash.com/premium_photo-1666264200766-2a97a298f91b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Electronics',
    },
    {
      id: 'asdfgdj5yu3rdfhn',
      image: 'https://images.unsplash.com/photo-1513116476489-7635e79feb27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Industrial & Scientific',
    },
  ]

  recommendedDeals: Card[] = [
    {
      id: '3rg45h46h4',
      image: 'https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      discount: 31,
    },
    {
      id: 'sdfgrk7o6wt',
      image: 'https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      discount: 28,
    },
    {
      id: 'adfgbfk7i98rtwef',
      image: 'https://images.unsplash.com/photo-1549482199-bc1ca6f58502?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      discount: 19,
    },
    {
      id: 'adfgbfk7i98ef',
      image: 'https://plus.unsplash.com/premium_photo-1681139760816-d0c39952f9ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      discount: 28,
    },
  ]

  apparels: Card[] = [
    {
      id: 'weg4tu46',
      image: 'https://images.unsplash.com/photo-1597317628840-d3472f7aa7fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Women',
    },
    {
      id: 'weg4tu35h546',
      image: 'https://images.unsplash.com/photo-1585232350744-974fc9804d65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Men',
    },
    {
      id: '1weg4tu35h546',
      image: 'https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Girls',
    },
    {
      id: '2weg4tu35h546',
      image: 'https://images.unsplash.com/photo-1599360889420-da1afaba9edc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      title: 'Boys',
    },
  ]

  shoes: Card[] = [
    {
      id: '13rt35y56h5',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      title: 'Women\'s',
    },
    {
      id: '23rt35y56h5',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      title: 'Men\'s',
    },
    {
      id: '33rt35y56h5',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      title: 'Girl\'s',
    },
    {
      id: '43rt35y56h5',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
      title: 'Boy\'s',
    },
  ]
  popularCameraGifts: Card[] = [
    {
      id: '1sdfgrj6uu4twef',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtZXJhfGVufDB8fDB8fHww',
    },
    {
      id: '2sdfgrj6uu4twef',
      image: 'https://plus.unsplash.com/premium_photo-1667538960104-25726d82a6e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtZXJhfGVufDB8fDB8fHww',
    },
    {
      id: '3sdfgrj6uu4twef',
      image: 'https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '4sdfgrj6uu4twef',
      image: 'https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ]
  tablets: Card[] = [
    {
      id: '1ethuk67i5gre',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhYmxldHN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '2ethuk67i5gre',
      image: 'https://images.unsplash.com/photo-1628591459313-a64214c5bfac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRhYmxldHN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '3ethuk67i5gre',
      image: 'https://images.unsplash.com/photo-1604404439625-976a22785855?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRhYmxldHN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '4ethuk67i5gre',
      image: 'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHRhYmxldHN8ZW58MHx8MHx8fDA%3D',
    },
  ]
  electronics: Card[] = [
    {
      id: '1sdfgrjk85rerge',
      image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
    {
      id: '2sdfgrjk85rerge',
      image: 'https://plus.unsplash.com/premium_photo-1673709635732-c83149ac689d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '3sdfgrjk85rerge',
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
    {
      id: '4sdfgrjk85rerge',
      image: 'https://images.unsplash.com/photo-1557701197-2f99da0922dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
  ]
  discountElectronics: Card[] = [
    {
      id: '1scvbghj67u564twefs',
      image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
    {
      id: '2scvbghj67u564twefs',
      image: 'https://images.unsplash.com/photo-1586062129117-08db958ba215?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
    {
      id: '3scvbghj67u564twefs',
      image: 'https://plus.unsplash.com/premium_photo-1664194584496-a3bccb6c6d86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
    {
      id: '4scvbghj67u564twefs',
      image: 'https://plus.unsplash.com/premium_photo-1684512989514-f0e4db5cc44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww',
    },
  ]
  wireless: Card[] = [
    {
      id: '1as4thj5j67j6',
      title: 'Fitbit Charge 6 Fitness Tracker with Google apps, Heart Rate on Exercises',
      image: 'https://images.unsplash.com/photo-1655804484380-51f5a639f2e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
      price_int: 129,
      price_cent: 95,
      currency_sign: '$',
      price_crossed: 159.95,
    },
    {
      id: '2as4thj5j67j6',
      title: 'SAMSUNG Galaxy SmartTag2, Bluetooth Tracker, Smart Tag GPS GPS GPS GPS GPS',
      image: 'https://images.unsplash.com/photo-1516972238977-89271fb2bab8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpcmVsZXNzJTIwZWFycGhvbmV8ZW58MHx8MHx8fDA%3D',
      price_int: 21,
      price_cent: 99,
      currency_sign: '$',
      price_crossed: 29.99,
    },
    {
      id: '3as4thj5j67j6',
      title: 'Apple iPhone 11, 64GB, Black - Unlocked (Renewed)',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHdpcmVsZXNzJTIwZWFycGhvbmV8ZW58MHx8MHx8fDA%3D',
      price_int: 264,
      price_cent: 95,
      currency_sign: '$',
      price_crossed: 307.95,
    },
  ]
  personalCares: Card[] = [
    {
      id: '1asfefhryjtt',
      image: 'https://plus.unsplash.com/premium_photo-1684407617001-6a20d1798917?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uYWwlMjBjYXJlfGVufDB8fDB8fHww',
    }
  ]
  delasInShoes: Card[] = [
    {
      id: '1asdfgdfghjui6utrg',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    }
  ]
  favoriteToys: Card[] = [
    {
      id: '1fbtuki787u4rb',
      image: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95c3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: '2fbtuki787u4rb',
      image: 'https://images.unsplash.com/photo-1603558431750-dfa36513aee6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '3fbtuki787u4rb',
      image: 'https://images.unsplash.com/photo-1531512721928-a2c9d1a3fb9f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRveXN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '4fbtuki787u4rb',
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRveXN8ZW58MHx8MHx8fDA%3D',
    },
  ]
  womenFashionSneakers: Card[] = [
    {
      id: '1dfgthkl7i5tt',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '2dfgthkl7i5tt',
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '3dfgthkl7i5tt',
      image: 'https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: '4dfgthkl7i5tt',
      image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D',
    },
  ]
  popularBeauty: Card[] = [
    {
      id: '1sdfgrj6ui65teghg',
      title: 'Eucerin Q10 Anti Wrinkle Face Cream Bundle, Day Cream and Nig…',
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
      price_int: 16,
      price_cent: 90,
      currency_sign: '$',
      price_crossed: 23.98,
    },
    {
      id: '2sdfgrj6ui65teghg',
      title: 'PanOxyl Antimicrobial Hydrating Acne Creamy Wash, 4% Benzoyl',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
      price_int: 9,
      price_cent: 76,
      currency_sign: '$',
      price_crossed: 10.25,
    },
    {
      id: '3sdfgrj6ui65teghg',
      title: 'Burt\'s Bees Christmas Gifts, 5 Stocking Stuffers Products, Everyday',
      image: 'https://images.unsplash.com/photo-1598528738936-c50861cc75a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
      price_int: 9,
      price_cent: 98,
      currency_sign: '$',
    },
  ]
  popularApparel: Card[] = [
    {
      id: '1dfghthk7754ertfhfg',
      title: 'Timberland PRO Men\'s Low Impact Work Glove',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D',
      price_int: 16,
      price_cent: 99,
      currency_sign: '$',
    },
    {
      id: '2dfghthk7754ertfhfg',
      title: 'Nautica Men\'s Classic Fit Short Sleeve Dual Tipped Collar Polo Shirt',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D',
      price_int: 47,
      price_cent: 30,
      currency_sign: '$',
    },
    {
      id: '3dfghthk7754ertfhfg',
      title: 'Nautica Men\'s Classic Fit Short Sleeve Dual Tipped Collar Polo Shirt',
      image: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBwYXJlbHxlbnwwfHwwfHx8MA%3D%3D',
      price_int: 27,
      price_cent: 22,
      currency_sign: '$',
      price_crossed: 42.00,
    },
  ]
}
