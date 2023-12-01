---
title: "Overall Championship and third place at HPC-AI competition 23th"
description: "NTHU Team-ZY and Team-SJ secure the champion and third place respectfully at 6th Asia-Pacific HPC-AI Student Competition"
pubDate: "Nov 30 2023"
heroImage: "/HPC-AI23-banner.jpg"
---

Our student team from National TsingHua University's Computer Science department have secured the champion of 6th APAC HPC-AI student competition again, with a third place also taken done by us!

The competition has been for six month long with fully onsite access of NCI Australia and NSCC Singapore cluster. Totally 24 teams from 12 different countries have participated in HPC-AI, MPAS-Atmosphere was this year's HPC task, a collaborative project for developing atmosphere, ocean and other earth-system simulation components for use in climate, regional climate and weather studies; the AI task was BLOOM, a Large Language Model (LLM) with its 176 billion parameters. By the time we dedicated in these tasks, eventually we performed excellent final result and may proundly confirm we have also done a insanely great job in our presentation!

Compare to last year's competition, we haven't achieve big amount of performance improvement, but the spirit of hpc in our heart refused to accept the destiny, the confusions and struggles push us to come up with some innovative idea, at the end of the day, we have learn a lot more than we excepted in this competition, we even discussed with a Ph.D from NCDR to figure out how did the MPAS works. 

As for the new members we recruited this year, their were some of the members not from CS department, thanks for advisor Chou's training camp, he decided to let the student with diverse majors have a chance to absorb knowledge in HPC. Professor Chou has been dedicated for NTHU SCC team for over a decade, we have gotten lots of resources from the predecessors, coaches and professor homself. The repeated winner is definitely not by luck.

Talk about the HPC tasks, team-ZY took serveral approaches to reduce simulation time, including communication library tuning, network library tunning, and data partitioning... Eventually, we found out the most improvement is from building the finetune openmpi for MPAS-A, and setting architecture flags for application core. In addition, we change the way of partitioning graph, which can recover some trouble in load-balancing, moreover, we use ROMIO(an alternative way may replace MPI-IO) to improve the initialization part of simulation. In the other hand, our AI task have struggle more than we excepted. We took lots of time building a faster version of pytorch rather rhan just pip install, while it turned out their is almost no differnence on the performance. At the end, the most improvement was gotten through increasing the batch size of inference, we also did some test with the torch script method and tuning NCCL environment variables, while BLOOM couldn't utilize torch script as well, but we actully got a little benefit in NCCL. Last but not least, we fully prepared for the presentation and made it fluently with confident.

Team ZY: ZHAN-YI LIN and SHIH-HSUN WEI handled the HPC task, and CHEN-AN PAI, HAO-TIEN YU and MING-CHUN TSAI handled the AI task.

Thanks for the help from National Center for High-performance Computing by letting us tested the task on their cluster Taiwania2 and Taiwania3.
Thanks for the kindly computing resource offered by NCI gadi, and the continuously support from Pengzhi Zhu(hpcai council).

Press release: [link](https://www.hpcadvisorycouncil.com/pdf/2023_APAC_HPC_AI%20Competition_Result_Announcement_PR_En.pdf)

- Team-ZY Members: ZHAN-YI LIN, CHEN-AN PAI, SHIH-HSUN WEI, HAO-TIEN YU, MING-CHUN TSAI
- Team-SJ Members: SHIH-JOU CHENG, WEI-CHIH HUANG, SSU-CHENG Lai, WEI-PO LIN, TUNG-YU HSIEH, CHIH-YU HSIEH
- Student Coaches: CHAN-YU MOU, FU-CHIANG CHANG, PIN-YI KUO
- Advisor: Jerry Chou

<div align="center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Unity is Strength, and the same principle applies to GPUs.🏆Champion of HPCAI23🏆<a href="https://twitter.com/hashtag/HPCAI23?src=hash&amp;ref_src=twsrc%5Etfw">#HPCAI23</a> </blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
