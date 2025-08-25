"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// Variants pour le conteneur de la liste (ul)
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre l'animation de chaque enfant
    },
  },
};

// Variants pour chaque item de la liste (li)
const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

interface StaggeredListProps {
  children: React.ReactNode;
  className?: string;
}

// Le composant conteneur
const List: React.FC<StaggeredListProps> = ({ children, className }) => {
  return (
    <motion.ul
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }} // L'animation se déclenche quand 50% de la liste est visible
    >
      {children}
    </motion.ul>
  );
};

// Le composant pour chaque item
const Item: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <motion.li className={className} variants={staggerItem}>
      {children}
    </motion.li>
  );
};

// Exporter les deux composants sous un même nom
export const StaggeredList = {
  List,
  Item,
};
