1. update to latest keystone / prisma
2. cache the contest (with bets? how to update... maybe we always use user_bets query to fill that portion!?): need to never cache ANY bets probably. or query them in the first place. these always need to be a 'live' query to make sure context and access remains...what about registrations... hmm!
3. add contest relation to bet
4. get user bets with a better query, then we can fetch this anytime for less cost
