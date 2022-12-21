execute as @a[c=1,scores={katana_cd=0..2}] run scoreboard players set @s ktn_tm 0

execute as @a[c=1,scores={scharge=0..9999}] run scoreboard players set @s scharge 0

tag @s remove scharge
execute as @s run kill @e[type=pixel:spear_damage,r=2]
