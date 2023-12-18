import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card, CardsComponent, HeaderComponent, SliderComponent } from 'src/app/components';
import { CardComponent } from 'src/app/components/cards/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SliderComponent,
    CardsComponent,
    CardComponent,
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
}
