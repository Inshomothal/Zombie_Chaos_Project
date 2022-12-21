say debug reitire
execute as @a[c=1,scores={halberd_cd=1..1000}] run scoreboard players remove @s halberd_cd 1
execute as @a[c=1,scores={ph_cd=1..1000}] run scoreboard players remove @s ph_cd 1

execute as @a[c=1,scores={ph_cd=-1000..-1}] run scoreboard players set @s ph_cd 0

execute as @a[c=1,scores={katar_cd=1..1000}] run scoreboard players remove @s katar_cd 1

execute as @a[c=1,scores={katar_cd=-1000..-1}] run scoreboard players set @s katar_cd 0

execute as @a[c=1,scores={spint=1..1000}] run scoreboard players remove @s spint 1

execute as @a[c=1,scores={spint=-1000..-1}] run scoreboard players set @s spint 0

execute as @a[c=1,scores={grtswrd_cd=1..1000}] run scoreboard players remove @s grtswrd_cd 1

execute as @a[c=1,scores={grtswrd_cd=-1000..-1}] run scoreboard players set @s grtswrd_cd 0

execute as @a[c=1,scores={halberd_cd=-1000..-1}] run scoreboard players set @s halberd_cd 0

execute as @a[c=1,scores={saber_cd=1..1000}] run scoreboard players remove @s saber_cd 1

execute as @a[c=1,scores={saber_cd=-1000..-1}] run scoreboard players set @s saber_cd 0

execute as @a[c=1,scores={bdc_cd=1..1000}] run scoreboard players remove @s bdc_cd 1

execute as @a[c=1,scores={bdc_cd=-1000..-1}] run scoreboard players set @s bdc_cd 0

execute as @a[c=1,scores={pcharge=1..1000}] run scoreboard players remove @s pcharge 1

execute as @a[c=1,scores={pcharge=-1000..-1}] run scoreboard players set @s pcharge 0

execute as @a[c=1,scores={lance_cd=1..1000}] run scoreboard players remove @s lance_cd 1

execute as @a[c=1,scores={lance_cd=-1000..-1}] run scoreboard players set @s lance_cd 0

execute as @a[c=1,scores={ls_cd=1..1000}] run scoreboard players remove @s ls_cd 1

execute as @a[c=1,scores={ls_cd=-1000..-1}] run scoreboard players set @s ls_cd 0

execute as @a[c=1,scores={glaive_cd=1..1000}] run scoreboard players remove @s glaive_cd 1

execute as @a[c=1,scores={glaive_cd=-1000..-1}] run scoreboard players set @s glaive_cd 0

execute as @a[c=1,scores={glvabl_cd=-10001..-1}] run scoreboard players set @s glvabl 0

execute as @a[c=1,scores={glvabl=1..1000}] run scoreboard players remove @s glvabl 1

execute as @a[c=1,scores={spear_cd=1..1000}] run scoreboard players remove @s spear_cd 1

execute as @a[c=1,scores={spear_cd=-1000..-1}] run scoreboard players set @s spear_cd 0

execute as @a[c=1,scores={mace_cd=1..1000}] run scoreboard players remove @s mace_cd 1

execute as @a[c=1,scores={mace_cd=-1000..-1}] run scoreboard players set @s mace_cd 0

execute as @a[c=1,scores={dagger_cd=1..1000}] run scoreboard players remove @s dagger_cd 1

execute as @a[c=1,scores={dagger_cd=-1000..-1}] run scoreboard players set @s dagger_cd 0

execute as @a[c=1,scores={hghmnd=1..1000}]  run scoreboard players remove @s hghmnd 1

execute as @a[c=1,scores={hghmnd=-9999..-1}]  run scoreboard players set @s hghmnd 0

execute as @a[c=1,scores={hghmnd=0},tag=hghmnd] run gamerule randomtickspeed 1

execute as @a[c=1,scores={hghmnd=0},tag=hghmnd] run tag @s remove hghmnd

execute as @a[c=1,scores={katana_cd=1..1000}] run scoreboard players remove @a katana_cd 1

execute as @a[c=1,scores={katana_cd=-1000..-1}] run scoreboard players set @s katana_cd 0

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add ktn_tm dummy
execute as @a[c=1,scores={katana_cd=0..2}] run scoreboard players set @s ktn_tm 0

execute as @a[c=1,scores={katana_cd=3..20}] run scoreboard players set @s ktn_tm 1

execute as @a[c=1,scores={katana_cd=21..40}] run scoreboard players set @s ktn_tm 2

execute as @a[c=1,scores={katana_cd=41..60}] run scoreboard players set @s ktn_tm 3

execute as @a[c=1,scores={katana_cd=61..80}] run scoreboard players set @s ktn_tm 4

execute as @a[c=1,scores={katana_cd=81..100}] run scoreboard players set @s ktn_tm 5

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add halberd_tm dummy
execute as @a[c=1,tag=!joyloy] run scoreboard objectives add hlbrablt dummy
execute as @a[c=1,tag=!joyloy] run scoreboard players set @s hlbrablt 0
execute as @a[c=1,scores={halberd_cd=0..2}] run scoreboard players set @s halberd_tm 0

execute as @a[c=1,scores={halberd_cd=3..20}] run scoreboard players set @s halberd_tm 1

execute as @a[c=1,scores={halberd_cd=21..40}] run scoreboard players set @s halberd_tm 2

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add mc_tm dummy
execute as @a[c=1,scores={mace_cd=0..2}] run scoreboard players set @s mc_tm 0

execute as @a[c=1,scores={mace_cd=3..20}] run scoreboard players set @s mc_tm 1

execute as @a[c=1,scores={mace_cd=21..40}] run scoreboard players set @s mc_tm 2

execute as @a[c=1,scores={mace_cd=41..60}] run scoreboard players set @s mc_tm 3

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add lngswrd_tm dummy
execute as @a[c=1,scores={ls_cd=0..2}] run scoreboard players set @s lngswrd_tm 0

execute as @a[c=1,scores={ls_cd=3..20}] run scoreboard players set @s lngswrd_tm 1

execute as @a[c=1,scores={ls_cd=21..40}] run scoreboard players set @s lngswrd_tm 2

execute as @a[c=1,scores={ls_cd=41..60}] run scoreboard players set @s lngswrd_tm 3

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add glv_tm dummy
execute as @a[c=1,scores={glaive_cd=0..2}] run scoreboard players set @s glv_tm 0

execute as @a[c=1,scores={glaive_cd=3..21}] run scoreboard players set @s glv_tm 1

execute as @a[c=1,scores={glaive_cd=21..40}] run scoreboard players set @s glv_tm 2

scoreboard objectives add spr_tm dummy
execute as @a[c=1,scores={spear_cd=0..2}] run scoreboard players set @s spr_tm 0

execute as @a[c=1,scores={spear_cd=3..20}] run scoreboard players set @s spr_tm 1

execute as @a[c=1,scores={spear_cd=21..40}] run scoreboard players set @s spr_tm 2

execute as @a[c=1,scores={spear_cd=41..60}] run scoreboard players set @s spr_tm 3

scoreboard objectives add lnc_tm dummy
execute as @a[c=1,scores={lance_cd=0..2}] run scoreboard players set @s lnc_tm 0

execute as @a[c=1,scores={lance_cd=3..20}] run scoreboard players set @s lnc_tm 1

execute as @a[c=1,scores={lance_cd=21..40}] run scoreboard players set @s lnc_tm 2

execute as @a[c=1,scores={lance_cd=41..60}] run scoreboard players set @s lnc_tm 3

execute as @a[c=1,scores={lance_cd=61..80}] run scoreboard players set @s lnc_tm 4

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add ktr_tm dummy
execute as @a[c=1,scores={katar_cd=0..2}] run scoreboard players set @s ktr_tm 0

execute as @a[c=1,scores={katar_cd=3..20}] run scoreboard players set @s ktr_tm 1

execute as @a[c=1,scores={katar_cd=21..40}] run scoreboard players set @s ktr_tm 2

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add rpr_tm dummy
execute as @a[c=1,tag=!joyloy] run scoreboard objectives add rprspd dummy
execute as @a[c=1,scores={rapier_cd=0..2}] run scoreboard players set @s rpr_tm 0

execute as @a[c=1,scores={rapier_cd=3..20}] run scoreboard players set @s rpr_tm 1

execute as @a[c=1,scores={rapier_cd=21..40}] run scoreboard players set @s rpr_tm 2

execute as @a[c=1,scores={rprspd=!0}] run scoreboard players remove @s rprspd 1

execute as @a[c=1,scores={rapier_cd=1..1000}] run scoreboard players remove @s rapier_cd 1

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add sbr_tm dummy
execute as @a[c=1,scores={saber_cd=0..2}] run scoreboard players set @s sbr_tm 0

execute as @a[c=1,scores={saber_cd=3..20}] run scoreboard players set @s sbr_tm 1

execute as @a[c=1,scores={saber_cd=21..40}] run scoreboard players set @s sbr_tm 2

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add grtswrd_tm dummy
execute as @a[c=1,scores={grtswrd_cd=0..2}] run scoreboard players set @s grtswrd_tm 0

execute as @a[c=1,scores={grtswrd_cd=3..20}] run scoreboard players set @s grtswrd_tm 1

execute as @a[c=1,scores={grtswrd_cd=21..40}] run scoreboard players set @s grtswrd_tm 2

execute as @a[c=1,scores={grtswrd_cd=41..60}] run scoreboard players set @a grtswrd_tm 3

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add hmr_tm dummy
execute as @a[c=1,scores={hammer_cd=0..2}] run scoreboard players set @s hmr_tm 0

execute as @a[c=1,scores={hammer_cd=3..20}] run scoreboard players set @s hmr_tm 1

execute as @a[c=1,scores={hammer_cd=21..40}] run scoreboard players set @s hmr_tm 2

execute as @a[c=1,scores={hammer_cd=41..60}] run scoreboard players set @s hmr_tm 3

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add bdc_tm dummy
execute as @a[c=1,scores={bdc_cd=0..2}] run scoreboard players set @s bdc_tm 0

execute as @a[c=1,scores={bdc_cd=3..20}] run scoreboard players set @s bdc_tm 1

execute as @a[c=1,scores={bdc_cd=21..40}] run scoreboard players set @s bdc_tm 2

execute as @a[c=1,scores={bdc_cd=41..60}] run scoreboard players set @s bdc_tm 3

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add ph_tm dummy
execute as @a[c=1,scores={ph_cd=0..2}] run scoreboard players set @s ph_tm 0

execute as @a[c=1,scores={ph_cd=3..20}] run scoreboard players set @s ph_tm 1

execute as @a[c=1,scores={ph_cd=21..40}] run scoreboard players set @s ph_tm 2

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add lngbch dummy
execute as @a[c=1,scores={lngbsht=0..2}] run scoreboard players set @s lngbch 0

execute as @a[c=1,scores={lngbsht=3..20}] run scoreboard players set @s lngbch 1

execute as @a[c=1,scores={lngbsht=21..40}] run scoreboard players set @s lngbch 2

execute as @a[c=1,scores={lngbsht=41..60}] run scoreboard players set @s lngbch 3

execute as @a[c=1,tag=!joyloy] run gamerule sendcommandfeedback false

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add exhaust dummy

execute as @a[c=1,tag=!joyloy] run scoreboard objectives add exhaust_lim dummy

execute as @a[c=1,tag=!joyloy] run scoreboard players set @a[c=1,tag=!joyloy] exhaust_lim 150

execute as @a[c=1,tag=!joyloy] run scoreboard players set @s exhaust 150

##Included this bit to try and work out the exhaust regen factor
execute as @a[c=1,tag=!joyloy] run scoreboard objectives add exhregen dummy

execute as @a[c=1,tag=!joyloy] run scoreboard players set @a[c=1,tag=!joyloy] exhregen 0

execute as @a[c=1,tag=!joyloy] run tag @s add joyloy

execute as @a[c=1,scores={exhaust=-999..-20}] run kill @s

execute as @a[c=1,scores={exhaust=-999..-20}] run scoreboard players set @s exhaust 100
