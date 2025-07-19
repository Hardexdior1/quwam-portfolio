"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface BettingGameProps {
  onClose: () => void
}

export default function BettingGame({ onClose }: BettingGameProps) {
  const [bet, setBet] = useState("")
  const [guess, setGuess] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [computerNumber, setComputerNumber] = useState<number | null>(null)

  const playGame = () => {
    const betAmount = Number.parseFloat(bet)
    const userGuess = Number.parseInt(guess)
    const computer = Math.floor(Math.random() * 5) + 1

    setComputerNumber(computer)

    if (userGuess === computer) {
      let multiplier = 2
      if (betAmount >= 10) multiplier = 3
      const winnings = betAmount * multiplier
      setResult(`🎉 You won! Computer picked ${computer}. You win $${winnings.toFixed(2)}`)
    } else {
      setResult(`😔 You lost! Computer picked ${computer}. You guessed ${userGuess}.`)
    }
  }

  const resetGame = () => {
    setBet("")
    setGuess("")
    setResult(null)
    setComputerNumber(null)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Mini Betting Game</CardTitle>
            <CardDescription>Guess a number from 1-5 and win!</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-gray-600">
            <p>• Bet $5-9: Win 2x your money</p>
            <p>• Bet $10+: Win 3x your money</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bet Amount ($)</label>
            <Input
              type="number"
              value={bet}
              onChange={(e) => setBet(e.target.value)}
              placeholder="Enter bet amount"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Guess (1-5)</label>
            <Input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Pick a number"
              min="1"
              max="5"
            />
          </div>

          {result && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">{result}</p>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={playGame} disabled={!bet || !guess} className="bg-black text-white hover:bg-gray-800">
              Play Game
            </Button>
            <Button variant="outline" onClick={resetGame}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
