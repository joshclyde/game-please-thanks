/*

Basic Attacks
Base Damage + (Base Damage per lvl × God's lvl) + (100% of Physical Power OR 20% of Magical Power)

Damage = (100 × Unmitigated Damage)/(Protections + 100)

Actual Defense = (Protection × (1-%Reduction) - Flat Reduction) × (1-%Pen) - Flat Pen



*/

// Base Damage + (Base Damage per lvl × God's lvl) + (100% of Physical Power OR 20% of Magical Power)
export const calculateBasicAttackDamage = ({
  baseDamage,
  baseDamagePerLevel,
  level,
  physicalPower,
}: {
  baseDamage: number;
  baseDamagePerLevel: number;
  level: number;
  physicalPower: number;
}) => {
  return baseDamage + baseDamagePerLevel * level + physicalPower;
};
