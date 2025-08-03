import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Watercolor background with gradient ellipses */}
      <div className="fixed inset-0 bg-gradient-to-br from-stone-50 via-slate-50 to-neutral-50">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-pink-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-gradient-radial from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-radial from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-violet-200/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Pink Aurora Borealis Background - Behind Everything */}

      </div>
      
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <MarqueeSection />
        <div className="bg-gradient-to-b from-transparent via-stone-100/50 to-transparent">
          <OurStorySection />
          <PricingSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-20 p-6 w-full flex justify-between items-center"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="text-black text-xl font-semibold"
      >
        wampany.com
      </motion.div>

      <motion.a 
        href="mailto:hello@wampany.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/50 hover:bg-white/60 transition-all duration-200 shadow-lg"
      >
        Contact
      </motion.a>
    </motion.header>
  )
}

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center py-32 px-6 min-h-screen flex items-center justify-center"
    >
      {/* Grid pattern with cursor reveal */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.15) 120px, transparent 200px), radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Bright vibrant gradient ellipses with noise */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter1)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(135deg, rgba(255, 165, 0, 0.9) 0%, rgba(255, 192, 203, 0.8) 50%, rgba(30, 144, 255, 0.85) 100%)
            `,
            filter: 'blur(60px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(225deg, rgba(255, 255, 0, 0.85) 0%, rgba(255, 165, 0, 0.8) 50%, rgba(255, 20, 147, 0.9) 100%)
            `,
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter3)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(45deg, rgba(30, 144, 255, 0.9) 0%, rgba(255, 255, 0, 0.75) 50%, rgba(255, 165, 0, 0.85) 100%)
            `,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter4)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(315deg, rgba(255, 20, 147, 0.85) 0%, rgba(30, 144, 255, 0.8) 50%, rgba(255, 255, 0, 0.9) 100%)
            `,
            filter: 'blur(35px)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Additional bright accent gradient */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-52 h-52 rounded-full"
          style={{
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter5'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter5)' opacity='0.3'/%3E%3C/svg%3E"),
              linear-gradient(90deg, rgba(255, 165, 0, 0.85) 0%, rgba(255, 255, 0, 0.8) 50%, rgba(255, 192, 203, 0.9) 100%)
            `,
            filter: 'blur(45px)',
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main content */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative  px-20 z-10"
      >
        <motion.div
          className="mx-auto mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", bounce: 0.3 }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl leading-12 sm:leading-15 md:leading-30 lg:text-[12rem] font-light mb-4 text-gray-900 font-['Bricolage_Grotesque']">
            <motion.span 
              className="italic block text-left text-7xl md:text-8xl font-['Instrument_Serif']"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              the
            </motion.span>
            <motion.span 
              className="font-bold block"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Wallpaper
            </motion.span>
            <motion.span 
              className="font-light text-right text-5xl block font-['Inter']"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              company
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-gray-600 text-xl md:text-2xl font-light font-['Bricolage_Grotesque'] max-w-2xl mx-auto"
        >
          generate stunning wallpapers for your company
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

const MarqueeSection = () => {
  const wampanyCompanies = [
    {
      image: '/wampany/kaboom.png',
      name: 'kaboom.ai',
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGa_OvWdy9pbQ/company-logo_200_200/B4EZdlkk9QHgAQ-/0/1749755778761/kaboom_ai_logo?e=2147483647&v=beta&t=8POa7IthJ4w9XCGTUw2y29_ZdpG5BsvI1ID8kGv7y5Y', // Using same image as logo for now
      website: 'https://kaboom.ai'
    },
    {
      image: '/wampany/linewise.png',
      name: 'linewise.io',
      logo: 'https://static.wixstatic.com/media/cc1207_3ecb6ce3bd9c413a9f45b39bfd52b0e8~mv2.png/v1/fill/w_118,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/wixagency_front_view_floating_one_3D_element_of_heart_icon_in_s_dd17aaf2-92d9-4274-8bae-44.png', // Using same image as logo for now
      website: 'https://linewise.io'
    },
    {
      image: '/wampany/wampany.png',
      name: 'Cactus',
      logo: 'https://bookface-images.s3.amazonaws.com/small_logos/2d53a6cf3c8074296831c1a7ec4bd88edbf7e572.png', // Using same image as logo for now
      website: 'https://oncactus.com'
    }
  ];

  const createImageCards = (companyIndex, count = 10) => {
    const company = wampanyCompanies[companyIndex];
    
    return Array.from({ length: count }, (_, i) => {
      // Add "You." text card at a specific position (let's say position 5)
      const isYouCard = i === 5;
      
      return (
        <motion.div
          key={i}
          className="h-32 w-48 md:h-40 md:w-60 lg:h-48 lg:w-72 mx-4 flex-shrink-0 rounded-2xl shadow-2xl border-4 border-white/60 backdrop-blur-sm overflow-hidden relative group cursor-pointer"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)'
          }}
          onClick={() => !isYouCard && window.open(company.website, '_blank')}
        >
          {isYouCard ? (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <span className="text-white text-2xl md:text-3xl font-['Bricolage_Grotesque'] font-bold">
                Your Company.
              </span>
            </div>
          ) : (
            <>
              <img
                src={company.image}
                alt={`${company.name} wallpaper`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                {/* Company Name in top left */}
                <div className="flex items-start justify-between">
                  <h3 className="text-white text-lg md:text-xl font-['Bricolage_Grotesque'] font-semibold">
                    {company.name}
                  </h3>
                  
                  {/* Company Logo Avatar */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 p-1 flex items-center justify-center">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Visit Website indicator */}
                <div className="text-white/80 text-xs md:text-sm font-['Bricolage_Grotesque']">
                  Click to visit website →
                </div>
              </div>
            </>
          )}
        </motion.div>
      )
    })
  }

  const CustomMarquee = ({ children, direction = 'left', duration = 25 }) => {
    return (
      <div className="flex overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: direction === 'left' ? [0, -1920] : [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
          style={{ width: 'max-content' }}
        >
          {children}
          {children} {/* Duplicate for seamless loop */}
        </motion.div>
      </div>
    )
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 overflow-hidden"
    >
      {/* First row - moving left - using kaboom.png */}
      <div className="mb-8">
        <CustomMarquee direction="left" duration={30}>
          {createImageCards(0)}
        </CustomMarquee>
      </div>
      
      {/* Second row - moving right - using linewise.png */}
      <div className="mb-8">
        <CustomMarquee direction="right" duration={25}>
          {createImageCards(1)}
        </CustomMarquee>
      </div>
      
      {/* Third row - moving left - using wampany.png */}
      <div className="mb-8">
        <CustomMarquee direction="left" duration={35}>
          {createImageCards(2)}
        </CustomMarquee>
      </div>
    </motion.section>
  )
}

const OurStorySection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 px-6 text-center max-w-5xl mx-auto"
    >
      <motion.h2 
        className="text-5xl md:text-6xl font-bold mb-16 text-gray-900 font-['Bricolage_Grotesque']"
        initial={{ scale: 0.9, y: 30 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        Our Story
      </motion.h2>
      <motion.div 
        className="text-gray-700 text-xl max-w-4xl mx-auto font-['Bricolage_Grotesque'] font-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We believe that beautiful design should be accessible to everyone. Our mission is to transform ordinary spaces into extraordinary experiences through carefully curated wallpaper collections.
        </motion.p>
        <motion.p 
          className="mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Founded by a team of passionate designers and technologists, The Wallpaper Company combines traditional craftsmanship with cutting-edge digital innovation to create stunning visual narratives for modern living and working spaces.
        </motion.p>
        <motion.p 
          className="mb-8 leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          From watercolor abstracts to geometric patterns, our AI-powered design platform generates unique wallpapers that reflect your brand's personality and aesthetic vision.
        </motion.p>
        <motion.p 
          className="leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Join thousands of satisfied customers who have transformed their spaces with our premium wallpaper solutions. Experience the perfect blend of artistry and technology.
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

const PricingSection = () => {
  const plans = [
    {
      name: 'STARTER',
      price: 4.99,
      description: 'Perfect for solopreneurs',
      features: [
        '4 custom wallpapers delivered',
        'High-quality resolution',
        '0 revisions included',
        '3-4 days delivery time',
        'Phone & Desktop version',
      ],
      highlighted: false,
      buttonText: 'Get Wallpapers'
    },
    {
      name: 'PROFESSIONAL',
      price: 8.99,
      description: 'Most popular choice for startups with a team',
      features: [
        '10 custom wallpapers delivered',
        'Premium 4K resolution',
        '5 revisions included',
        '2-3 days delivery time',
        'Phone & Desktop version'
      ],
      highlighted: true,
      buttonText: 'Get Wallpapers'
    },
    {
      name: 'PREMIUM',
      price: 18.99,
      description: 'Best for big teams & startups',
      features: [
        '20 custom wallpapers delivered',
        'Premium 4k resolution',
        '10 revisions included',
        '24 hours delivery time',
        'Priority Support',
      ],
      highlighted: false,
      buttonText: 'Get Wallpapers'
    }
  ]

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="py-24 px-6"
    >
      <motion.h2 
        className="text-5xl  md:text-6xl font-bold text-center mb-40 text-gray-900 font-['Bricolage_Grotesque']"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        viewport={{ once: true }}
      >
        Pricing
      </motion.h2>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -20, 
              scale: 1.05,
              transition: { duration: 0.4, type: "easeInOut", bounce: 0.1 }
            }}
            className={`relative p-8 rounded-3xl backdrop-blur-sm border font-['Bricolage_Grotesque'] ${
              plan.highlighted 
                ? 'bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 text-white border-white/30 shadow-2xl transform scale-105 md:scale-110' 
                : 'bg-white/60 text-gray-900 border-white/60 shadow-xl'
            } ${plan.highlighted ? 'md:mt-[-2rem] md:mb-[-2rem]' : ''}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-sm font-bold tracking-widest mb-3 opacity-80">{plan.name}</h3>
              <p className="text-sm opacity-80 mb-6 leading-relaxed">{plan.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-sm opacity-80 ml-2 block mt-1">one-time payment</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-center text-sm"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  viewport={{ once: true }}
                >
                  <span className={`w-3 h-3 rounded-full mr-4 flex-shrink-0 ${
                    plan.highlighted ? 'bg-white' : 'bg-gradient-to-r from-violet-400 to-purple-400'
                  }`}></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.005, transition: { duration: 1.3, type: "easeInOut", bounce: 0 } }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-4 px-6 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-white text-purple-600 hover:bg-gray-50 shadow-lg'
                  : 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg'
              }`}
            >
              {plan.buttonText}
            </motion.button>
            
            <p className="text-xs text-center mt-6 opacity-60">
              No credit card required
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-24 text-center text-gray-600"
    >
      <p className="relative z-10 text-sm font-['Bricolage_Grotesque']">Crafted with luv from Jayden & Justin</p>
    </motion.footer>
  )
}

export default App
