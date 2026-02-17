"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import mainHall1 from "@/assets/mainHall/1.jpg"
import mainHall2 from "@/assets/mainHall/2.jpg"
import mainHall3 from "@/assets/mainHall/3.jpg"
import mainHall4 from "@/assets/mainHall/4.jpg"
import mainHall5 from "@/assets/mainHall/5.jpg"

const MAIN_HALL_IMAGES = [
  mainHall1,
  mainHall2,
  mainHall3,
  mainHall4,
  mainHall5,
] as const

const NUM_IMAGES = MAIN_HALL_IMAGES.length
const ANGLE_STEP = 360 / NUM_IMAGES
/** Radius as fraction of viewport width so cylinder scales with screen */
const RADIUS_FRACTION = 0.5

/**
 * Full-viewport fixed background: several mainHall images arranged in a 3D
 * circle that spins 360° horizontally (around Y-axis) as the user scrolls
 * from top to bottom. Carousel and perspective scale with viewport width.
 */
export function ScrollRotateBackground() {
  const [rotationDeg, setRotationDeg] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(1400)
  const radiusPx = viewportWidth * RADIUS_FRACTION
  const perspectivePx = viewportWidth * 1.2

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) {
        setRotationDeg(0)
        return
      }
      const progress = Math.min(scrollY / docHeight, 1)
      setRotationDeg(progress * 360)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const updateViewport = () => {
      setViewportWidth(window.innerWidth)
    }
    updateViewport()
    window.addEventListener("resize", updateViewport)
    return () => window.removeEventListener("resize", updateViewport)
  }, [])

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      style={{ perspective: `${perspectivePx}px` }}
    >
      {/* Full-viewport carousel; perspective and radius scale with viewport width */}
      <div
        className="relative h-full w-full transition-transform duration-150 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotationDeg}deg)`,
        }}
      >
        {MAIN_HALL_IMAGES.map((src, i) => {
          const angle = i * ANGLE_STEP
          return (
            <div
              key={i}
              className="absolute inset-0 origin-center"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radiusPx}px)`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i < 2}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-background/75"
      />
    </div>
  )
}
