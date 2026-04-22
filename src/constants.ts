/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface Category {
  id: string;
  title: string;
  services: Service[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'casuals',
    title: 'Casual Wear',
    services: [
      { name: 'Shirts', description: 'Bespoke cotton and linen shirts tailored for perfect fit.', price: '₹400+' },
      { name: 'Pants / Trousers', description: 'Custom fitted formal and casual trousers.', price: '₹500+' },
      { name: 'Jeans Alteration', description: 'Professional resizing and repair for denim.', price: '₹150+' },
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional Wear',
    services: [
      { name: 'Kurta', description: 'Elegant traditional kurtas for all occasions.', price: '₹600+' },
      { name: 'Payjama', description: 'Comfortable and well-fitted ethnic bottoms.', price: '₹300+' },
      { name: 'Sadri (Waistcoat)', description: 'Traditional waistcoats to complement your ethnic look.', price: '₹800+' },
      { name: 'Dhoti', description: 'Expert stitching of traditional dhotis.', price: '₹400+' },
    ],
  },
  {
    id: 'wedding',
    title: 'Wedding & Ceremonial',
    services: [
      { name: 'Sherwani', description: 'Majestic wedding sherwanis with intricate detailing.', price: '₹5000+' },
      { name: 'Three-Piece Suit', description: 'Premium wedding suits for the groom and wedding party.', price: '₹4500+' },
      { name: 'Indo-Western', description: 'Contemporary fusion wear for modern celebrations.', price: '₹3500+' },
      { name: 'Jodhpuri Suit', description: 'Royal Jodhpuri sets for a classic heritage look.', price: '₹4000+' },
    ],
  },
];

export const SHOP_LOCATION = "https://www.google.com/maps/place/S+sons+tailor+%26+collection/@26.9323955,80.9434595,17z/data=!4m14!1m7!3m6!1s0x3999574bfae9d395:0xb9c1f99aaf3d0c8e!2sS+sons+tailor+%26+collection!8m2!3d26.9323955!4d80.9460344!16s%2Fg%2F11r_mj8sw6!3m5!1s0x3999574bfae9d395:0xb9c1f99aaf3d0c8e!8m2!3d26.9323955!4d80.9460344!16s%2Fg%2F11r_mj8sw6?entry=ttu";
