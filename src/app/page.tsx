"use client"

import { useState } from "react"
import { Play, Pause, Heart, Search, Home, Music, Plus, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export default function MusicApp() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [volume, setVolume] = useState([70])
  const [progress, setProgress] = useState([30])
  const [likedSongs, setLikedSongs] = useState<number[]>([])

  const songs = [
    { id: 1, title: "Midnight Dreams", artist: "Luna Wave", album: "Neon Nights", duration: "3:45", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop" },
    { id: 2, title: "Electric Soul", artist: "The Synths", album: "Digital Love", duration: "4:12", cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop" },
    { id: 3, title: "Cosmic Journey", artist: "Star Gazers", album: "Beyond", duration: "5:23", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
    { id: 4, title: "Urban Pulse", artist: "City Lights", album: "Metropolis", duration: "3:58", cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop" },
    { id: 5, title: "Ocean Waves", artist: "Aqua Sound", album: "Deep Blue", duration: "4:45", cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop" },
    { id: 6, title: "Sunset Vibes", artist: "Chill Masters", album: "Golden Hour", duration: "3:33", cover: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop" },
  ]

  const playlists = [
    { name: "Top Hits 2024", count: 50, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop" },
    { name: "Chill Vibes", count: 32, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop" },
    { name: "Workout Mix", count: 45, image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop" },
    { name: "Focus Flow", count: 28, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop" },
  ]

  const toggleLike = (id: number) => {
    setLikedSongs(prev => 
      prev.includes(id) ? prev.filter(songId => songId !== id) : [...prev, id]
    )
  }

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-black/40 backdrop-blur-sm border-r border-white/5 p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            SonicWave
          </h1>
          <p className="text-xs text-gray-400 mt-1">Premium Music Streaming</p>
        </div>

        <nav className="space-y-4 flex-1">
          <Button variant="ghost" className="w-full justify-start gap-3 text-white hover:text-emerald-400 hover:bg-white/5">
            <Home className="w-5 h-5" />
            Início
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400 hover:text-white hover:bg-white/5">
            <Search className="w-5 h-5" />
            Buscar
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400 hover:text-white hover:bg-white/5">
            <Music className="w-5 h-5" />
            Sua Biblioteca
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400 hover:text-white hover:bg-white/5">
            <Plus className="w-5 h-5" />
            Criar Playlist
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-gray-400 hover:text-white hover:bg-white/5">
            <Heart className="w-5 h-5" />
            Músicas Curtidas
          </Button>
        </nav>

        {/* Premium Card */}
        <Card className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-emerald-500/30 p-4 mt-4">
          <h3 className="font-semibold mb-2">Experimente o Premium</h3>
          <p className="text-xs text-gray-300 mb-3">Apenas R$ 14,90/mês - mais barato que o Spotify!</p>
          <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold">
            Assinar Agora
          </Button>
        </Card>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-b from-emerald-900/20 to-transparent p-4 sm:p-6 lg:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Buscar músicas, artistas ou álbuns..." 
                className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:bg-white/15"
              />
            </div>
            <Button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold hidden sm:flex">
              Assinar Premium
            </Button>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Boa noite</h2>
          <p className="text-gray-400">Suas músicas favoritas te esperam</p>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 pb-32">
          {/* Playlists */}
          <section className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Playlists em Destaque</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {playlists.map((playlist, idx) => (
                <Card 
                  key={idx}
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer group overflow-hidden"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={playlist.image} 
                      alt={playlist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1 truncate">{playlist.name}</h4>
                    <p className="text-sm text-gray-400">{playlist.count} músicas</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Songs List */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Tocadas Recentemente</h3>
            <div className="space-y-2">
              {songs.map((song, idx) => (
                <div
                  key={song.id}
                  onClick={() => setCurrentSong(idx)}
                  className={`flex items-center gap-3 sm:gap-4 p-3 rounded-lg hover:bg-white/5 transition-all cursor-pointer group ${
                    currentSong === idx ? 'bg-white/10' : ''
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <img 
                      src={song.cover} 
                      alt={song.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate text-sm sm:text-base">{song.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">{song.artist}</p>
                  </div>

                  <p className="hidden sm:block text-sm text-gray-400 truncate max-w-[120px]">
                    {song.album}
                  </p>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(song.id)
                    }}
                    className="flex-shrink-0"
                  >
                    <Heart 
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        likedSongs.includes(song.id) 
                          ? 'fill-emerald-500 text-emerald-500' 
                          : 'text-gray-400'
                      }`}
                    />
                  </Button>

                  <p className="text-sm text-gray-400 flex-shrink-0 hidden sm:block">
                    {song.duration}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mt-12 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Planos Premium</h3>
            <p className="text-gray-400 text-center mb-8">Mais barato que o Spotify, com qualidade superior</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all">
                <h4 className="text-xl font-bold mb-2">Individual</h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ 14,90</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  <li>✓ Sem anúncios</li>
                  <li>✓ Qualidade de áudio superior</li>
                  <li>✓ Download ilimitado</li>
                  <li>✓ 1 conta</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                  Assinar
                </Button>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-emerald-500/50 p-6 relative overflow-hidden scale-105 shadow-2xl shadow-emerald-500/20">
                <div className="absolute top-4 right-4 bg-emerald-500 text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <h4 className="text-xl font-bold mb-2">Família</h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ 24,90</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  <li>✓ Todos os benefícios Individual</li>
                  <li>✓ Até 6 contas</li>
                  <li>✓ Controle parental</li>
                  <li>✓ Mix familiar</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg">
                  Assinar
                </Button>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all sm:col-span-2 lg:col-span-1">
                <h4 className="text-xl font-bold mb-2">Estudante</h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold">R$ 7,90</span>
                  <span className="text-gray-400">/mês</span>
                </div>
                <ul className="space-y-2 mb-6 text-sm text-gray-300">
                  <li>✓ Todos os benefícios Individual</li>
                  <li>✓ Desconto especial</li>
                  <li>✓ Verificação necessária</li>
                  <li>✓ 1 conta</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600">
                  Assinar
                </Button>
              </Card>
            </div>
          </section>
        </div>

        {/* Player */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-black/90 backdrop-blur-xl border-t border-white/10 p-3 sm:p-4">
          <div className="max-w-screen-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-3">
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1:23</span>
                <span>{songs[currentSong]?.duration || "3:45"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              {/* Current Song Info */}
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <img 
                  src={songs[currentSong]?.cover || songs[0].cover} 
                  alt="Current song"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-sm sm:text-base truncate">
                    {songs[currentSong]?.title || songs[0].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {songs[currentSong]?.artist || songs[0].artist}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleLike(songs[currentSong]?.id || songs[0].id)}
                  className="flex-shrink-0 hidden sm:flex"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      likedSongs.includes(songs[currentSong]?.id || songs[0].id)
                        ? 'fill-emerald-500 text-emerald-500' 
                        : 'text-gray-400'
                    }`}
                  />
                </Button>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentSong(prev => (prev > 0 ? prev - 1 : songs.length - 1))}
                  className="hidden sm:flex"
                >
                  <SkipBack className="w-5 h-5" />
                </Button>
                
                <Button
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-white hover:bg-gray-200 text-black w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentSong(prev => (prev < songs.length - 1 ? prev + 1 : 0))}
                  className="hidden sm:flex"
                >
                  <SkipForward className="w-5 h-5" />
                </Button>
              </div>

              {/* Volume */}
              <div className="hidden lg:flex items-center gap-2 flex-1 justify-end max-w-[200px]">
                <Volume2 className="w-5 h-5 text-gray-400" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
