import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Search, Star, Zap, Globe } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GrandmaMascot from '@/components/GrandmaMascot.jsx';

const categories = [
  {
    emoji: '🐾',
    label: 'Animals',
    desc: 'From the tiniest ant to the mighty elephant — our animal list covers mammals, birds, reptiles, fish, and insects from every corner of the planet.',
    examples: ['dolphin', 'jaguar', 'flamingo', 'narwhal', 'platypus'],
    color: 'text-primary',
    bgColor: 'bg-primary/15',
    borderColor: 'border-primary/20',
  },
  {
    emoji: '🍎',
    label: 'Food & Drink',
    desc: 'From kitchen staples to exotic ingredients — fruits, vegetables, spices, cuisines, and everything in between.',
    examples: ['croissant', 'turmeric', 'avocado', 'burrito', 'tiramisu'],
    color: 'text-secondary',
    bgColor: 'bg-secondary/15',
    borderColor: 'border-secondary/20',
  },
  {
    emoji: '🌿',
    label: 'Nature',
    desc: 'Landscapes, weather, plants, and the natural world — from a gentle brook to a roaring volcano.',
    examples: ['glacier', 'lavender', 'monsoon', 'canyon', 'blossom'],
    color: 'text-accent',
    bgColor: 'bg-accent/15',
    borderColor: 'border-accent/20',
  },
  {
    emoji: '🏙️',
    label: 'Places',
    desc: 'Every kind of location — from cozy rooms to grand landmarks, cities, coastlines, and hidden hideaways.',
    examples: ['harbor', 'dungeon', 'monastery', 'quarry', 'lighthouse'],
    color: 'text-primary',
    bgColor: 'bg-primary/15',
    borderColor: 'border-primary/20',
  },
  {
    emoji: '💪',
    label: 'Body & Health',
    desc: 'Anatomy, medicine, and wellness — from the bones in your hand to the workings of your immune system.',
    examples: ['ligament', 'cerebrum', 'pancreas', 'capillary', 'cartilage'],
    color: 'text-secondary',
    bgColor: 'bg-secondary/15',
    borderColor: 'border-secondary/20',
  },
  {
    emoji: '🎨',
    label: 'Arts & Music',
    desc: 'Painting, sculpture, jazz, opera, poetry — the full spectrum of human creativity.',
    examples: ['sonnet', 'palette', 'baroque', 'improv', 'symphony'],
    color: 'text-accent',
    bgColor: 'bg-accent/15',
    borderColor: 'border-accent/20',
  },
  {
    emoji: '⚽',
    label: 'Sports',
    desc: 'Games, gear, positions, and athletes — covering everything from archery to wrestling.',
    examples: ['marathon', 'dribble', 'podium', 'penalty', 'hurdle'],
    color: 'text-primary',
    bgColor: 'bg-primary/15',
    borderColor: 'border-primary/20',
  },
  {
    emoji: '💼',
    label: 'Business & Finance',
    desc: 'Commerce, economics, and the working world — terms every professional and Scrabble player should know.',
    examples: ['dividend', 'invoice', 'mortgage', 'venture', 'equity'],
    color: 'text-secondary',
    bgColor: 'bg-secondary/15',
    borderColor: 'border-secondary/20',
  },
  {
    emoji: '💡',
    label: 'Technology',
    desc: 'The digital world in words — computing, the internet, devices, and the language of the modern age.',
    examples: ['algorithm', 'bandwidth', 'firewall', 'encrypt', 'protocol'],
    color: 'text-accent',
    bgColor: 'bg-accent/15',
    borderColor: 'border-accent/20',
  },
  {
    emoji: '❤️',
    label: 'Emotions',
    desc: 'The full range of human feeling — from bliss and euphoria to melancholy and trepidation.',
    examples: ['nostalgia', 'euphoria', 'anguish', 'empathy', 'serenity'],
    color: 'text-primary',
    bgColor: 'bg-primary/15',
    borderColor: 'border-primary/20',
  },
  {
    emoji: '📚',
    label: 'Oxford Words',
    desc: 'Sophisticated, well-defined vocabulary — every word comes with its own definition so you can learn as you play.',
    examples: ['ebullient', 'sagacious', 'ephemeral', 'laconic', 'tenacious'],
    color: 'text-secondary',
    bgColor: 'bg-secondary/15',
    borderColor: 'border-secondary/20',
  },
  {
    emoji: '😎',
    label: 'Slang',
    desc: "From 1950s cool-cat lingo to Gen Z buzzwords — boogie, dope, sick, rizz, bussin, slay and hundreds more. British and Australian slang too!",
    examples: ['boogie', 'rizz', 'bussin', 'salty', 'goat'],
    color: 'text-accent',
    bgColor: 'bg-accent/15',
    borderColor: 'border-accent/20',
  },
];

const stats = [
  { number: '6,500+', label: 'Total Words', icon: BookOpen, color: 'text-primary', bg: 'bg-primary/15' },
  { number: '12', label: 'Categories', icon: Star, color: 'text-secondary', bg: 'bg-secondary/15' },
  { number: '3', label: 'Dictionary Types', icon: Globe, color: 'text-accent', bg: 'bg-accent/15' },
  { number: '2–10+', label: 'Letter Range', icon: Zap, color: 'text-primary', bg: 'bg-primary/15' },
];

function DictionaryPage() {
  const [search, setSearch] = useState('');

  const filtered = categories.filter(
    cat =>
      cat.label.toLowerCase().includes(search.toLowerCase()) ||
      cat.desc.toLowerCase().includes(search.toLowerCase()) ||
      cat.examples.some(w => w.includes(search.toLowerCase()))
  );

  return (
    <>
      <Helmet>
        <title>Jumble.best - Our Dictionary</title>
        <meta
          name="description"
          content="Explore Jumble.best's 6,500+ word dictionary spanning 12 categories — animals, food, nature, sports, slang, Oxford words and more. Built for Scrabble, Wordle & Words with Friends."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary/15 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 mb-6 shadow-inner -rotate-3">
                <BookOpen className="w-10 h-10 text-primary rotate-3" />
              </div>
              <h1 className="hero-heading text-5xl md:text-7xl font-black text-foreground mb-6">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Dictionary
                </span>
              </h1>
              <p className="body-text text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium mb-4">
                Over <span className="text-primary font-black">6,500 curated words</span> across 12 categories — and growing every day.
              </p>
              <p className="body-text text-lg text-muted-foreground max-w-xl mx-auto">
                🎯 <span className="font-bold text-foreground">Classic Jumble purist?</span> Every 5-letter word you need is here.{' '}
                <span className="font-bold text-foreground">Word game adventurer?</span> We go from 2 to 10+ letters — way beyond the classics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-16 bg-muted/40 border-y border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-card border-2 border-border rounded-2xl p-6 text-center shadow-sm"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bg} mb-3`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <p className={`hero-heading text-4xl font-black mb-1 ${stat.color}`}>{stat.number}</p>
                    <p className="body-text text-muted-foreground font-bold text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search categories or example words..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-border bg-card text-foreground font-medium text-lg focus:outline-none focus:border-primary transition-colors duration-200 shadow-sm"
              />
            </motion.div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground text-xl py-12">No categories found for "{search}"</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((cat, i) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`bg-card border-2 ${cat.borderColor} rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                  >
                    <div className="text-4xl mb-4">{cat.emoji}</div>
                    <h2 className={`hero-heading text-2xl font-black mb-3 ${cat.color}`}>{cat.label}</h2>
                    <p className="body-text text-muted-foreground font-medium mb-6 text-base leading-relaxed">
                      {cat.desc}
                    </p>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        Example words
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.examples.map(word => (
                          <span
                            key={word}
                            className={`px-3 py-1.5 ${cat.bgColor} ${cat.color} rounded-xl text-sm font-black`}
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Dictionary Types Explainer */}
        <section className="py-24 bg-muted/40 border-t border-border/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="hero-heading text-4xl md:text-5xl font-black text-foreground mb-4">
                3 Dictionary Types
              </h2>
              <p className="body-text text-xl text-muted-foreground max-w-xl mx-auto font-medium">
                Choose the right dictionary for your game
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Standard',
                  emoji: '📖',
                  desc: 'Everyday English — the words you know and love. Perfect for most word games and puzzles. Covers all lengths from 2 to 10+ letters.',
                  best: 'Best for: Wordle, Scrabble, Jumble',
                  color: 'text-primary',
                  border: 'border-primary/20',
                  bg: 'bg-primary/10',
                },
                {
                  title: 'Oxford',
                  emoji: '🎓',
                  desc: 'Sophisticated vocabulary with full definitions. Expand your knowledge while you play — every word comes with its meaning.',
                  best: 'Best for: Crosswords, learning, advanced play',
                  color: 'text-secondary',
                  border: 'border-secondary/20',
                  bg: 'bg-secondary/10',
                },
                {
                  title: 'Slang',
                  emoji: '😎',
                  desc: "Decades of slang from the 1950s to today's Gen Z terms. Boogie, dope, sick, rizz, bussin — if it's been said on the street, it's in here.",
                  best: 'Best for: Words with Friends, casual play, fun',
                  color: 'text-accent',
                  border: 'border-accent/20',
                  bg: 'bg-accent/10',
                },
              ].map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-card border-2 ${type.border} rounded-3xl p-8 shadow-lg text-center`}
                >
                  <div className="text-5xl mb-4">{type.emoji}</div>
                  <h3 className={`hero-heading text-2xl font-black mb-4 ${type.color}`}>{type.title}</h3>
                  <p className="body-text text-muted-foreground font-medium mb-6 text-base">{type.desc}</p>
                  <span className={`inline-block px-4 py-2 ${type.bg} ${type.color} rounded-xl text-sm font-black`}>
                    {type.best}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Grandma Section */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GrandmaMascot
                message="Over 6,500 words and we're still adding more! If you think a word is missing, drop us a note in the FAQ feedback form. Kalamity Kate reads every one!"
                position="right"
              />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default DictionaryPage;
