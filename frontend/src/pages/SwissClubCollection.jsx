import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Calendar, MapPin, ArrowRight, Image, Palette } from 'lucide-react';

const SwissClubCollection = () => {
  const exhibitionImages = [
    {
      id: 1,
      title: 'Stahl House',
      description: 'Mid-century modern architecture overlooking the city, iconic poolside living',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/zy91c2da_IMG_1146.jpeg'
    },
    {
      id: 2,
      title: 'Palm Springs Doors',
      description: 'Desert modernism with vibrant doorways and decorative breeze blocks',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/8entc84z_IMG_1191.jpeg'
    },
    {
      id: 3,
      title: 'Alpine Pool',
      description: 'Winter retreat with heated pool and mountain chalet views',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/8p1mj2g6_IMG_3882.jpeg'
    },
    {
      id: 4,
      title: 'Champagne in the Snow',
      description: 'Alpine luxury with candlelit chalets and mountain backdrop',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/c9yavl7b_IMG_4338.jpeg'
    },
    {
      id: 5,
      title: 'Mountain Spa',
      description: 'Heated pool with panoramic views of snow-capped peaks',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/49bgandq_IMG_4340.jpeg'
    },
    {
      id: 6,
      title: 'Portofino View',
      description: 'Italian Riviera infinity pool with superyacht and Mediterranean coast',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/8tnhnzt0_IMG_4343.jpeg'
    },
    {
      id: 7,
      title: 'Côte d\'Azur Interior',
      description: 'Elegant dining room with striped silk curtains and sea view',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/pkxnvkj9_IMG_4432.jpeg'
    },
    {
      id: 8,
      title: 'Modern Eden World Tour',
      description: 'Official event poster for the Swiss Club Singapore exhibition',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/fdh00m3q_IMG-20251117-WA0107.jpg'
    },
    {
      id: 9,
      title: 'Swiss Club Singapore',
      description: 'The stunning venue poolside setting for the Modern Eden exhibition',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/vxlnvtj8_IMG-20251127-WA0028.jpg'
    },
    {
      id: 10,
      title: 'Exhibition Display',
      description: 'Miami Beach lifeguard tower and poolside paintings on easels',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/7pbwp3ax_IMG-20251127-WA0029.jpg'
    },
    {
      id: 11,
      title: 'Evening Reception',
      description: 'Guests enjoying the collection during the fine dining experience',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/drm7y7jo_IMG-20251127-WA0034.jpg'
    },
    {
      id: 12,
      title: 'Collection Preview',
      description: 'Modern Eden paintings displayed for collectors at the Swiss Club',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/7yrlszss_IMG-20251127-WA0036.jpg'
    },
    {
      id: 13,
      title: 'Artist at Work',
      description: 'Natasha Kissell presenting her work at the Swiss Club heritage room',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/6on7ykyo_IMG-20251209-WA0000.jpg'
    },
    {
      id: 14,
      title: 'Miami Beach Sunset',
      description: 'Framed lifeguard tower painting with surfboards at golden hour',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/0n80dgoj_IMG-20251209-WA0002.jpg'
    },
    {
      id: 15,
      title: 'Heritage Room Display',
      description: 'Miami Beach painting in the colonial heritage room with red shutters',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/r08r0phc_IMG-20251209-WA0003.jpg'
    },
    {
      id: 16,
      title: 'Monte Carlo Gardens',
      description: 'Lush palm-lined grounds of the Casino de Monte-Carlo',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/5koi0bgz_IMG-20251209-WA0043.jpg'
    },
    {
      id: 17,
      title: 'Coastal Watercolour',
      description: 'Rugged clifftop seascape with wild coastal vegetation',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/3y8recun_IMG-20251209-WA0044.jpg'
    },
    {
      id: 18,
      title: 'Octagonal Gallery',
      description: 'Miami Beach painting showcased in the Swiss Club heritage gallery',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/pqgf7hil_IMG20251124162430.jpg'
    },
    {
      id: 19,
      title: 'Champagne Reception',
      description: 'Event setup with Modern Eden brochures and champagne service',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/v9popxjx_IMG20251124162446.jpg'
    },
    {
      id: 20,
      title: 'Tropical Trio',
      description: 'Beach scenes featuring lifeguard tower, resort pool and cabana with hibiscus',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/glet70ey_IMG20251124162452.jpg'
    },
    {
      id: 21,
      title: 'Laguna Beach',
      description: 'California coastal garden with cacti, bougainvillea and ocean view',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/8u2yy4zj_IMG20251124162502.jpg'
    },
    {
      id: 22,
      title: 'Beach & Bay',
      description: 'Striped beach tent and Caribbean villa with infinity pool views',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/6mw58n7n_IMG20251124162510.jpg'
    },
    {
      id: 23,
      title: 'Exhibition Materials',
      description: 'Catalogues, investor packs and promotional materials for the World Tour',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/2f04oa64_IMG20251124162521.jpg'
    },
    {
      id: 24,
      title: 'Palm Springs & Paradise',
      description: 'Mid-century modernist pool and tropical bay resort paintings',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/0r7djo8t_IMG20251124162532.jpg'
    },
    {
      id: 25,
      title: 'Artist & Guest',
      description: 'Natasha Kissell in conversation during the dinner reception',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/i8rz1zzi_Screenshot_2026-01-13-21-35-03-98_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 26,
      title: 'Evening Conversation',
      description: 'Animated discussions at the private collectors dinner',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/88vk9ujj_Screenshot_2026-01-13-21-35-14-90_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 27,
      title: 'Collectors Dinner',
      description: 'Guests enjoying fine dining and art discussions',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/mj3sw0uf_Screenshot_2026-01-13-21-35-35-89_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 28,
      title: 'New Home',
      description: 'Collectors installing their Laguna Beach acquisition',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/mphmimg0_Screenshot_2026-01-14-13-22-41-21_6012fa4d4ddec268fc5c7112cbb265e7.jpg'
    },
    {
      id: 29,
      title: 'Terrace Dinner',
      description: 'Evening reception on the Swiss Club terrace',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/15y1advu_Screenshot_2026-01-13-21-34-12-84_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 30,
      title: 'Wine Cellar Reception',
      description: 'Guests enjoying champagne in the Swiss Club wine cellar',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/mjko0scl_Screenshot_2026-01-13-21-32-46-32_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 31,
      title: 'Artist Moment',
      description: 'Natasha Kissell sharing stories with collectors',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/jci6ngc8_Screenshot_2026-01-13-21-33-47-78_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 32,
      title: 'Terrace Gathering',
      description: 'Guests at the evening reception under tropical palms',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/xegiikrw_Screenshot_2026-01-13-21-30-30-25_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 33,
      title: 'Art & Conversations',
      description: 'Natasha Kissell with collectors discussing the Modern Eden series',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/d3376yuh_Screenshot_2026-01-13-21-30-53-54_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 34,
      title: 'Collector Evening',
      description: 'Distinguished guests in the wine cellar dining room',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/gj6rewoe_Screenshot_2026-01-13-21-32-20-65_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 35,
      title: 'Natasha at Dinner',
      description: 'The artist enjoying the evening with collectors',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/f00ieocm_Screenshot_2026-01-13-21-27-03-66_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 36,
      title: 'Artist & Collector',
      description: 'Natasha Kissell with guests during the fine dining experience',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/jfl2uwpf_Screenshot_2026-01-13-21-27-24-74_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 37,
      title: 'Bar Conversations',
      description: 'Collectors discussing art over champagne at the bar',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/rxgznbsm_Screenshot_2026-01-13-21-28-12-00_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 38,
      title: 'Garden Dinner',
      description: 'Tropical garden setting for the exclusive collectors dinner',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/euhzfj6q_Screenshot_2026-01-13-21-28-41-73_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 39,
      title: 'Host Address',
      description: 'Event host addressing guests at the garden dinner',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/khg2h00d_Screenshot_2026-01-13-21-28-53-97_1843fd3f74f49144123f76a000cd5e7e.jpg'
    },
    {
      id: 40,
      title: 'Poolside Evening',
      description: 'Swiss Club pool illuminated for the evening reception',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/rd11024s_IMG20251125230506.jpg'
    },
    {
      id: 41,
      title: 'Night at the Club',
      description: 'The iconic Swiss Club pool terrace after dark',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/d03uum6r_IMG20251125230510.jpg'
    },
    {
      id: 42,
      title: 'Singapore Setting',
      description: 'City backdrop during the Modern Eden World Tour',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/fsyw0s05_IMG20251126121147.jpg'
    },
    {
      id: 43,
      title: 'Tropical Beach Scene',
      description: 'Vibrant painting featuring palm trees and beachfront resort',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/1gr5rdcl_IMG20251127170952_01.jpg'
    },
    {
      id: 44,
      title: 'Desert Modern',
      description: 'Palm Springs inspired painting with mid-century architecture',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/n0e3ozcb_IMG20251127171101.jpg'
    },
    {
      id: 45,
      title: 'Simply Champagne Partnership',
      description: 'Modern Eden painting alongside champagne sponsor at the heritage room',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/8igp2jrn_IMG20251124194215.jpg'
    },
    {
      id: 46,
      title: 'Tropical Gardens',
      description: 'Evening view of the Swiss Club tropical pool gardens',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/vp7xep7c_IMG20251124214053.jpg'
    },
    {
      id: 47,
      title: 'Collection Spread',
      description: 'Full range of Modern Eden paintings on display for collectors',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/wumf8tcj_IMG20251125230453.jpg'
    },
    {
      id: 48,
      title: 'Miami Beach Feature',
      description: 'Large-scale lifeguard tower painting with poolside companion piece',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/4ao9fuuj_IMG20251125230458.jpg'
    },
    {
      id: 49,
      title: 'Singapore Skyline',
      description: 'Marina Bay and Singapore Flyer - backdrop to the World Tour',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/xhd6810a_IMG20251126173402.jpg'
    },
    {
      id: 50,
      title: 'Alpine Canvas',
      description: 'Mountain pool painting with artist business card on marble display',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/81ohj6s8_IMG20251124162614.jpg'
    },
    {
      id: 51,
      title: 'South Beach Surfboards',
      description: 'Colourful surfboards and lifeguard tower in the heritage room',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/z8xlx1et_IMG20251124162630.jpg'
    },
    {
      id: 52,
      title: 'Reception Ready',
      description: 'Champagne reception setup in the heritage room',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/xt742tcj_IMG20251124162651.jpg'
    },
    {
      id: 53,
      title: 'World Tour Signage',
      description: 'Exhibition directional poster with event sponsors and partners',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/17x22zq4_IMG20251124175515.jpg'
    },
    {
      id: 54,
      title: 'Après-Ski',
      description: 'Winter chalet scene with fur chairs and champagne service',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/j5sx2rov_IMG20251124162611.jpg'
    },
    {
      id: 55,
      title: 'Riviera Suite',
      description: 'Elegant interior with striped silk curtains and Mediterranean view',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/9fhxcanm_IMG20251124162559.jpg'
    },
    {
      id: 56,
      title: 'Portofino Bay',
      description: 'Italian Riviera with superyacht and infinity pool overlooking the harbour',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/sw1x9f68_IMG20251124162604.jpg'
    },
    {
      id: 57,
      title: 'Alpine Infinity',
      description: 'Dramatic mountain spa with heated pool and panoramic peaks',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/n7u90r5v_IMG20251124162608.jpg'
    },
    {
      id: 58,
      title: 'Mediterranean Collection',
      description: 'Portofino bay and Riviera interior paintings on marble display',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/fn9h63iv_IMG20251124162555.jpg'
    },
    {
      id: 59,
      title: 'Alpine Duo',
      description: 'Winter pool and après-ski scenes displayed on marble',
      image: 'https://customer-assets.emergentagent.com/job_a2dbd1c3-87a8-4e60-848a-2695f8789049/artifacts/5jz7p05i_IMG20251124162546.jpg'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <div className="film-grain"></div>

      {/* Header */}
      <section className="relative py-32 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8">
            <Building2 size={20} className="text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold tracking-widest">EXHIBITION PROGRAMME</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
            <span className="gradient-text">Swiss Club Singapore</span>
          </h1>
          
          <p className="text-2xl text-amber-400 mb-4 font-medium">
            Modern Eden World Tour
          </p>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A curated exhibition of contemporary paintings from the Natasha Kissell collection, presented at the prestigious Swiss Club Singapore as part of the Modern Eden World Tour.
          </p>

          {/* Exhibition Details */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-amber-400" />
              <span>Swiss Club Singapore</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-amber-400" />
              <span>November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette size={18} className="text-amber-400" />
              <span>Natasha Kissell Collection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibition Gallery */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
              Exhibition Gallery
            </h2>
            <p className="text-xl text-gray-400">
              {exhibitionImages.length > 0 ? `${exhibitionImages.length} exhibition views` : 'Images coming soon'}
            </p>
          </div>

          {exhibitionImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exhibitionImages.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-400/70 italic mb-3">
                      This work forms part of the ArtOnFilm curated programme.
                    </p>
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-white/10">
              <Image size={64} className="mx-auto text-amber-500/30 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Exhibition Images Coming Soon</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Gallery images from the Swiss Club exhibition will be added shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About the Exhibition */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-serif">
              About the Exhibition
            </h2>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-10 border border-white/10 mb-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              ArtOnFilm presented a curated exhibition of contemporary paintings from the Natasha Kissell collection at the Swiss Club Singapore as part of the Modern Eden World Tour. The exhibition showcased vibrant works exploring themes of architecture, coastal living, alpine luxury, and mid-century modernism.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Hosted over two exclusive evenings on 24th and 25th November 2025, guests enjoyed champagne receptions, meet-the-artist sessions, and fine dining experiences alongside the collection, with works available for acquisition through ArtOnFilm's retail programme.
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/50 rounded-xl p-6 border border-amber-500/20">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <Building2 size={24} className="text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Venue</h3>
              <p className="text-gray-400 text-sm">Swiss Club – an exclusive members' club and prestigious exhibition venue.</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Palette size={24} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Featured Artist</h3>
              <p className="text-gray-400 text-sm">Natasha Kissell – contemporary paintings from the Modern Eden series.</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-red-500/20">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Image size={24} className="text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Collection</h3>
              <p className="text-gray-400 text-sm">Works commissioned and owned by ArtOnFilm Ltd as trading stock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Statement */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl p-8 border-l-4 border-blue-500">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <span className="font-semibold text-white">ArtOnFilm Ltd operates as a trading company</span> commissioning, producing and selling contemporary artworks through exhibitions and its website.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-serif">
            Explore the Full Collection
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            View the complete Natasha Kissell collection and available works.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/collection/natasha-kissell"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-105"
            >
              View Natasha Kissell Collection
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              Shop Available Works
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwissClubCollection;
