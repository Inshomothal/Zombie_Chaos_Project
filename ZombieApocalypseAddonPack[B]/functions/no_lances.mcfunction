execute as @a[c=1,scores={katana_cd=0..2}] run scoreboard players set @s ktn_tm 0

execute as @a[c=1,scores={pcharge=0..9999}] run scoreboard players set @s pcharge 0

tag @s remove pcharge
execute as @s run kill @e[type=pixel:lance_charge,r=2]
