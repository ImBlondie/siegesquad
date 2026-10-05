"use client";
import { useState } from 'react';
import { Trophy, Users, BarChart3, Shield, Swords, TrendingUp, Bot } from 'lucide-react';
export default function SiegeSquad() {
  const [selectedMap, setSelectedMap] = useState('Club House');
const [analysis, setAnalysis] = useState("");

  const [players, setPlayers] = useState([
  {
    name: "Taliban",
    rank: "Gold IV",
    attack: "Ying",
    defense: "Thorn"
  }
]);
  const [bannedAttackers] = useState(['Jackal', 'Dokkaebi']);
  const [bannedDefenders] = useState(['Mira', 'Fenrir']);
  const squad = [
    { name: 'Taliban', rank: 'Gold IV', kd: 1.50, attack: 'Ying', defense: 'Thorn' },
    { name: 'Brad', rank: 'Gold I', kd: 0.91, attack: 'Osa', defense: 'Vigil' },
    { name: 'Wesley', rank: 'Silver I', kd: 1.15, attack: 'Lion', defense: 'Melusi' },
    { name: 'Caleb', rank: 'Gold V', kd: 0.80, attack: 'Fuze', defense: 'Frost' },
    { name: 'Chris', rank: 'Bronze IV', kd: 0.96, attack: 'Brava', defense: 'Smoke' }, 
];
const attackOps = squad.map((player) => player.attack);

let recommendation = "Nomad";

if (!attackOps.includes("Thermite") && !attackOps.includes("Ace")) {
  recommendation = "Thermite";
}
else if (!attackOps.includes("Nomad")) {
  recommendation = "Nomad";
}
else if (!attackOps.includes("Buck") && !attackOps.includes("Sledge")) {
  recommendation = "Buck";
}
else if (!attackOps.includes("Lion")) {
  recommendation = "Lion";
}

function analyzeSquad() {
  const attackOps = squad.map((p) => p.attack);

  let weaknesses = [];

  if (!attackOps.includes("Thermite") && !attackOps.includes("Ace")) {
    weaknesses.push("No Hard Breacher");
  }

  if (!attackOps.includes("Nomad")) {
    weaknesses.push("No Flank Watch");
  }

  if (!attackOps.includes("Buck") && !attackOps.includes("Sledge")) {
    weaknesses.push("No Vertical Play");
  }

  if (weaknesses.length === 0) {
    alert("✅ Balanced lineup. No major weaknesses detected.");
  } else {
    alert("⚠️ " + weaknesses.join(" | "));
  }
}

const wrappedAwards = [
    '🏆 MVP: Taliban',
    '🎯 Clutch King: Taliban',
    '🤖 Drone Addict: Brad',
    '💥 Human Flashbang: Taliban',
    '🪤 Kapkan Victim: Chris',
    '🧱 Reinforcement Artist: Wesley'
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-black to-zinc-950 text-white p-6'>
      <div className='max-w-7xl mx-auto space-y-6'>


        <div className='text-center py-6'>
          <h1 className='text-6xl font-bold text-orange-500'>SiegeSquad</h1>
          <p className='text-zinc-400 text-lg'>AI Squad Builder • Siege Wrapped • Team Analytics</p>
        </div>

        <div className='grid lg:grid-cols-4 gap-4'>
<div className='bg-zinc-900 p-5 rounded-3xl'>
  <Bot className='text-orange-500 mb-2'/>
  <h2 className='font-bold text-xl'>Who Should I Play?</h2>

  <div className='mt-3 bg-orange-500 text-black p-3 rounded-2xl font-bold text-xl'>
    {recommendation}
  </div>

  <button
    onClick={analyzeSquad}
    className='mt-3 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-xl'
  >
    Analyze Squad
  </button>

  <p className='text-zinc-400 mt-2'>
    Best pick based on your team's current lineup.
  </p>
</div>

          <div className='bg-zinc-900 p-5 rounded-3xl'>
            <Swords className='text-orange-500 mb-2'/>
            <h2 className='font-bold'>Attack Recommendation</h2>
            <p className='mt-2 text-zinc-300'>Thermite • Buck • Nomad • Iana • Thatcher</p>
          </div>

          <div className='bg-zinc-900 p-5 rounded-3xl'>
            <Shield className='text-orange-500 mb-2'/>
            <h2 className='font-bold'>Defense Recommendation</h2>
            <p className='mt-2 text-zinc-300'>Mute • Smoke • Bandit • Jager • Valkyrie</p>
          </div>

          <div className='bg-zinc-900 p-5 rounded-3xl'>
            <TrendingUp className='text-orange-500 mb-2'/>
            <h2 className='font-bold'>Squad ELO</h2>
            <div className='text-3xl font-bold mt-2'>1587</div>
            <div className='text-green-400'>+43 This Week</div>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='bg-zinc-900 p-6 rounded-3xl'>
            <h2 className='text-2xl font-bold mb-4'>Operator Ban Simulator</h2>
            <div className='space-y-2'>
              <p>🚫 Attack Bans: {bannedAttackers.join(', ')}</p>
              <p>🚫 Defense Bans: {bannedDefenders.join(', ')}</p>
              <p className='text-orange-400'>Suggested Replacement: Ace instead of Thermite backup.</p>
            </div>
          </div>


          <div className='bg-zinc-900 p-6 rounded-3xl'>
            <h2 className='text-2xl font-bold mb-4'>Map Strategy Center</h2>
            <select value={selectedMap} onChange={(e)=>setSelectedMap(e.target.value)} className='bg-zinc-800 p-2 rounded-xl'>
              <option>Club House</option>
              <option>Bank</option>
              <option>Chalet</option>
              <option>Lair</option>
            </select>
            <p className='mt-3 text-zinc-400'>Recommended bans, site setups, and picks for {selectedMap}.</p>
          </div>
        </div>

        <div className='bg-zinc-900 p-6 rounded-3xl'>
          <div className='flex items-center gap-2 mb-4'>
            <Users />
            <h2 className='text-3xl font-bold'>Squad Profiles</h2>
          </div>


          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {squad.map(player => (
              <div key={player.name} className='bg-zinc-800 p-4 rounded-2xl'>
                <h3 className='font-bold text-lg'>{player.name}</h3>
                <p>{player.rank}</p>
                <p>K/D: {player.kd}</p>
                <p className='text-orange-400'>{player.attack}</p>
                <p className='text-blue-400'>{player.defense}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-zinc-900 p-6 rounded-3xl'>
          <div className='flex items-center gap-2 mb-4'>
            <BarChart3 />
            <h2 className='text-3xl font-bold'>Team Analytics</h2>
          </div>


          <div className='grid md:grid-cols-4 gap-4'>
            <div className='bg-zinc-800 p-4 rounded-2xl'><div>Win Rate</div><div className='text-3xl font-bold'>67%</div></div>
            <div className='bg-zinc-800 p-4 rounded-2xl'><div>Best Map</div><div className='text-3xl font-bold'>Club House</div></div>
            <div className='bg-zinc-800 p-4 rounded-2xl'><div>Best Stack</div><div className='text-3xl font-bold'>5‑Stack</div></div>
            <div className='bg-zinc-800 p-4 rounded-2xl'><div>Current Streak</div><div className='text-3xl font-bold'>L1</div></div>
          </div>
        </div>
        <div className='bg-zinc-900 p-6 rounded-3xl'>
          <div className='flex items-center gap-2 mb-4'>
            <Trophy className='text-yellow-400'/>
            <h2 className='text-3xl font-bold'>Siege Wrapped</h2>
          </div>


          <div className='grid md:grid-cols-3 gap-4 mb-6'>
            <div className='bg-zinc-800 p-4 rounded-2xl'>Most Played Operator: TEST</div>
            <div className='bg-zinc-800 p-4 rounded-2xl'>Favorite Map: Club House</div>
            <div className='bg-zinc-800 p-4 rounded-2xl'>STAT: TEST</div>
          </div>


          <div className='bg-zinc-800 rounded-2xl p-5'>
            <h3 className='font-bold text-xl mb-3'>Season Awards</h3>
            {wrappedAwards.map((award) => (
              <div key={award} className='py-1'>{award}</div>
            ))}
          </div>


          <div className='mt-4 bg-orange-500 text-black rounded-2xl p-5'>
            <h3 className='text-xl font-bold'>AI Season Summary</h3>
            <p>Your squad performed best on Club House, maintained a 67% win rate, and had the highest success rate when running Fuze, Osa, Brava, Ying, and Lion.</p>
          </div>
        </div>


      </div>
    </div>
  );
}
