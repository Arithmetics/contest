"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_session = require("@keystone-6/core/session");
var import_auth = require("@keystone-6/auth");
var import_core11 = require("@keystone-6/core");
var import_node_cron = __toESM(require("node-cron"));
var import_config = require("dotenv/config");

// lib/mail.ts
var import_nodemailer = require("nodemailer");
var import_resend = require("resend");
var testTransport = (0, import_nodemailer.createTransport)({
  host: process.env.MAIL_HOST || "smtp.ethereal.email",
  port: Number(process.env.MAIL_PORT) || 587,
  auth: {
    user: process.env.MAIL_USER || "",
    pass: process.env.MAIL_PASS || ""
  }
});
var resend = process.env.RESEND_API_KEY ? new import_resend.Resend(process.env.RESEND_API_KEY) : null;
function makeANiceEmail(text7) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello,</h2>
      <p>${text7}</p>
      <p>\u{1F44D}\u{1F3FB},</p> 
      <p>Brock</p>
    </div>
  `;
}
async function sendPasswordResetEmail(resetToken, to) {
  console.log("sendPasswordResetEmail got here");
  const emailHtml = makeANiceEmail(`Your Password Reset Token is here ->
    <a href="${process.env.FRONTEND_URL}/resetPassword?token=${resetToken}">Click Here to reset</a>
    `);
  if (resend) {
    await resend.emails.send({
      from: "no-reply@btbets.dev",
      to,
      subject: "Your password reset token",
      html: emailHtml
    });
  } else {
    const info = await testTransport.sendMail({
      to,
      from: "no-reply@btbets.dev",
      subject: "Your password reset token",
      html: emailHtml
    });
    console.log(`\u{1F48C} Message Sent!  Preview it at ${(0, import_nodemailer.getTestMessageUrl)(info)}`);
  }
}

// cache.ts
var cache = {};

// schemas/User.ts
var import_fields = require("@keystone-6/core/fields");
var import_core = require("@keystone-6/core");

// keystoneTypeAugments.ts
function isSignedIn({ session }) {
  return !!session;
}
function isAdmin({ session }) {
  return !!session?.data?.isAdmin;
}
function isOwnAccount({ session }) {
  return session?.itemId === session?.data.id;
}
async function canModifyBet(accessArgs) {
  const { session } = accessArgs;
  if (isAdmin(accessArgs)) {
    return true;
  }
  const userId = session?.data?.id;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const betOwnerAndLineNotClosed = {
    AND: [
      { user: { id: { equals: userId } } },
      {
        choice: {
          line: { closingTime: { gt: now } }
        }
      }
    ]
  };
  return betOwnerAndLineNotClosed;
}
async function canReadBet(accessArgs) {
  const { session } = accessArgs;
  if (isAdmin(accessArgs)) {
    return true;
  }
  const userId = session?.data?.id;
  const now = (/* @__PURE__ */ new Date()).toISOString();
  if (!userId) {
    return {
      choice: {
        line: { closingTime: { lt: now } }
      }
    };
  }
  const betOwnerOrLineClosed = {
    OR: [
      { user: { id: { equals: userId } } },
      {
        choice: {
          line: { closingTime: { lt: now } }
        }
      }
    ]
  };
  return betOwnerOrLineClosed;
}

// schemas/User.ts
var User = (0, import_core.list)({
  access: {
    operation: {
      create: isOwnAccount,
      query: () => true,
      update: isOwnAccount,
      delete: isAdmin
    }
  },
  fields: {
    email: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique", isFilterable: true }),
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    userName: (0, import_fields.text)({ validation: { isRequired: true }, isIndexed: "unique", isFilterable: true }),
    password: (0, import_fields.password)(),
    isAdmin: (0, import_fields.checkbox)({
      defaultValue: false,
      access: { read: () => true, update: isAdmin, create: isAdmin }
    }),
    bets: (0, import_fields.relationship)({ ref: "Bet.user", many: true }),
    avatarImage: (0, import_fields.relationship)({
      ref: "CloudImage",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] }
      }
    }),
    registrations: (0, import_fields.relationship)({ ref: "Registration.user", many: true }),
    histories: (0, import_fields.relationship)({ ref: "History.user", many: true })
  },
  ui: {
    listView: {
      initialColumns: ["email", "name", "isAdmin"]
    }
  }
});

// schemas/Contest.ts
var import_fields2 = require("@keystone-6/core/fields");
var import_core2 = require("@keystone-6/core");
var Contest = (0, import_core2.list)({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    name: (0, import_fields2.text)({ validation: { isRequired: true } }),
    description: (0, import_fields2.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    status: (0, import_fields2.select)({
      type: "enum",
      options: [
        { label: "Open", value: "OPEN" },
        { label: "In Progress", value: "IN_PROGRESS" },
        { label: "Complete", value: "COMPLETE" }
      ],
      validation: {
        isRequired: true
      },
      defaultValue: "OPEN",
      ui: {
        displayMode: "segmented-control"
      }
    }),
    entryFee: (0, import_fields2.integer)(),
    contestType: (0, import_fields2.select)({
      type: "enum",
      options: [
        { label: "NBA Over Under", value: "NBA_OVER_UNDER" /* NBA_OVER_UNDER */ },
        { label: "NFL Over Under", value: "NFL_OVER_UNDER" /* NFL_OVER_UNDER */ },
        { label: "NFL ATS", value: "NFL_ATS" /* NFL_ATS */ },
        { label: "NBA Playoffs", value: "NBA_PLAYOFFS" /* NBA_PLAYOFFS */ }
      ],
      validation: {
        isRequired: true
      }
    }),
    image: (0, import_fields2.relationship)({
      ref: "CloudImage",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] }
      }
    }),
    lines: (0, import_fields2.relationship)({ ref: "Line.contest", many: true }),
    registrations: (0, import_fields2.relationship)({ ref: "Registration.contest", many: true }),
    ruleSet: (0, import_fields2.relationship)({ ref: "RuleSet.contest", many: false }),
    winner: (0, import_fields2.relationship)({ ref: "User", many: false })
  }
});

// schemas/CloudImage.ts
var import_fields3 = require("@keystone-6/core/fields");
var import_core3 = require("@keystone-6/core");
var import_cloudinary = require("@keystone-6/cloudinary");
var cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  apiKey: process.env.CLOUDINARY_KEY || "",
  apiSecret: process.env.CLOUDINARY_SECRET || "",
  folder: "contests"
};
var CloudImage = (0, import_core3.list)({
  access: {
    operation: {
      create: isSignedIn,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    image: (0, import_cloudinary.cloudinaryImage)({
      cloudinary,
      label: "Source"
    }),
    altText: (0, import_fields3.text)({ validation: { isRequired: false } })
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText"]
    }
  }
});

// schemas/Line.ts
var import_fields4 = require("@keystone-6/core/fields");
var import_core4 = require("@keystone-6/core");
var Line = (0, import_core4.list)({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    title: (0, import_fields4.text)({ validation: { isRequired: true } }),
    closingTime: (0, import_fields4.timestamp)({ validation: { isRequired: true } }),
    benchmark: (0, import_fields4.float)({ validation: { isRequired: true } }),
    image: (0, import_fields4.relationship)({
      ref: "CloudImage",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] }
      }
    }),
    contest: (0, import_fields4.relationship)({ ref: "Contest.lines", many: false }),
    choices: (0, import_fields4.relationship)({ ref: "Choice.line", many: true }),
    standings: (0, import_fields4.relationship)({ ref: "Standing.line", many: true }),
    labelName: (0, import_fields4.virtual)({
      field: import_core4.graphql.field({
        type: import_core4.graphql.String,
        async resolve(item, _args, _context) {
          const context = _context;
          const lists = context.query;
          const graphql4 = String.raw;
          const parentContest = await lists.Contest.findOne({
            where: { id: item.contestId || "" },
            query: graphql4`
              id
              name
            `
          });
          const contestTitle = parentContest?.name || "";
          return `${item.title}: ${contestTitle}`;
        }
      })
    })
  },
  ui: {
    labelField: "labelName"
  }
});

// schemas/Choice.ts
var import_fields5 = require("@keystone-6/core/fields");
var import_core5 = require("@keystone-6/core");
var Choice = (0, import_core5.list)({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    title: (0, import_fields5.text)({ validation: { isRequired: true } }),
    selection: (0, import_fields5.select)({
      type: "enum",
      options: [
        { label: "Over", value: "OVER" },
        { label: "Under", value: "UNDER" },
        { label: "Away", value: "AWAY" },
        { label: "Home", value: "HOME" },
        { label: "Custom", value: "CUSTOM" }
      ],
      validation: {
        isRequired: true
      },
      ui: { displayMode: "select" }
    }),
    isWin: (0, import_fields5.checkbox)({ defaultValue: false }),
    points: (0, import_fields5.integer)({ validation: { isRequired: true }, defaultValue: 1 }),
    line: (0, import_fields5.relationship)({ ref: "Line.choices", many: false }),
    bets: (0, import_fields5.relationship)({ ref: "Bet.choice", many: true }),
    image: (0, import_fields5.relationship)({
      ref: "CloudImage",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] }
      }
    }),
    secondaryImage: (0, import_fields5.relationship)({
      ref: "CloudImage",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] }
      }
    }),
    status: (0, import_fields5.virtual)({
      field: import_core5.graphql.field({
        type: import_core5.graphql.enum({
          name: "ChoiceStatus",
          values: import_core5.graphql.enumValues(["NOT_STARTED", "WINNING", "LOSING", "WON", "LOST"])
        }),
        async resolve(item, _args, _context) {
          const context = _context;
          const lists = context.query;
          const graphql4 = String.raw;
          const requestedLine = await lists.Line.findOne({
            where: { id: item.lineId || "" },
            query: graphql4`
              id
              title
              benchmark
              standings(orderBy: { gamesPlayed: asc }) {
                id
                wins
                gamesPlayed
                totalGames
              }
            `
          });
          if (!requestedLine || !requestedLine.standings || requestedLine.standings.length < 1) {
            return "NOT_STARTED" /* NotStarted */;
          }
          const { gamesPlayed, wins, totalGames } = requestedLine.standings[requestedLine.standings.length - 1];
          const safeWins = wins || 0;
          const safeGamesPlayed = gamesPlayed || 0;
          const safeTotalGames = totalGames || 0;
          const safeBenchmark = requestedLine.benchmark || 0;
          const losses = safeGamesPlayed - safeWins;
          const lossBenchmark = safeTotalGames - safeBenchmark;
          const gamesRemaining = safeTotalGames - safeGamesPlayed;
          const winPercentage = safeWins / (safeGamesPlayed || 1);
          const benchmarkPercentage = safeBenchmark / (safeTotalGames || 1);
          if (item.selection === "OVER" && safeWins > safeBenchmark) {
            return "WON" /* Won */;
          }
          if (item.selection === "UNDER" && losses > lossBenchmark) {
            return "WON" /* Won */;
          }
          if (item.selection === "OVER" && safeWins + gamesRemaining < safeBenchmark) {
            return "LOST" /* Lost */;
          }
          if (item.selection === "UNDER" && losses + gamesRemaining < lossBenchmark) {
            return "LOST" /* Lost */;
          }
          if (item.selection === "OVER" && winPercentage > benchmarkPercentage + 1e-6) {
            return "WINNING" /* Winning */;
          }
          if (item.selection === "OVER" && winPercentage < benchmarkPercentage + 1e-6) {
            return "LOSING" /* Losing */;
          }
          if (item.selection === "UNDER" && winPercentage > benchmarkPercentage + 1e-6) {
            return "LOSING" /* Losing */;
          }
          if (item.selection === "UNDER" && winPercentage < benchmarkPercentage + 1e-6) {
            return "WINNING" /* Winning */;
          }
          return "NOT_STARTED" /* NotStarted */;
        }
      })
    }),
    labelName: (0, import_fields5.virtual)({
      field: import_core5.graphql.field({
        type: import_core5.graphql.String,
        async resolve(item, _args, _context) {
          const context = _context;
          const lists = context.query;
          const graphql4 = String.raw;
          const requestedLine = await lists.Line.findOne({
            where: { id: item.lineId || "" },
            query: graphql4`
              id
              title
              benchmark
            `
          });
          const title = requestedLine?.title || "??";
          const benchmark = requestedLine?.benchmark || "??";
          return `${title} - ${benchmark} - ${item.selection}`;
        }
      })
    })
  },
  ui: {
    labelField: "labelName",
    listView: {
      initialColumns: ["selection", "isWin", "line"]
    }
  }
});

// schemas/Bet.ts
var import_fields6 = require("@keystone-6/core/fields");
var import_core6 = require("@keystone-6/core");
var Bet = (0, import_core6.list)({
  access: {
    operation: {
      create: isSignedIn,
      query: () => true,
      update: isSignedIn,
      delete: () => true
    },
    filter: {
      query: canReadBet,
      delete: canModifyBet,
      update: canModifyBet
    }
  },
  fields: {
    user: (0, import_fields6.relationship)({ ref: "User.bets", many: false }),
    choice: (0, import_fields6.relationship)({ ref: "Choice.bets", many: false }),
    isSuper: (0, import_fields6.checkbox)({ defaultValue: false })
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context, operation } = args;
      const lists = context.query;
      const graphql4 = String.raw;
      const session = context.session;
      if (session.data.isAdmin) {
        return;
      }
      const userId = resolvedData.user?.connect?.id;
      const requestedChoice = await lists.Choice.findOne({
        where: { id: resolvedData.choice?.connect?.id },
        query: graphql4`
            id
            line {
              id
              closingTime
              title
              choices {
                id
                bets {
                  id
                  user {
                    id
                  }
                }
              }
              contest {
                id
                name
                ruleSet {
                  maxBets
                  maxSuperBets
                }
                registrations {
                  user {
                    id
                  }
                }
              }
            }
          `
      });
      const typedChoice = requestedChoice;
      if (operation === "create") {
        typedChoice.line?.choices?.forEach((choice) => {
          choice.bets?.forEach((bet) => {
            if (bet.user?.id === userId) {
              addValidationError("User already has a bet on this line");
            }
          });
        });
      }
      const usersRegistration = typedChoice?.line?.contest?.registrations?.some(
        (r) => r?.user?.id === session.data?.id
      );
      if (!usersRegistration) {
        addValidationError("User must be registered for the contest.");
      }
      if (userId !== session.data?.id) {
        addValidationError("Can only create bet for own account");
      }
      if (typedChoice.line?.closingTime) {
        const lineCloses = Date.parse(typedChoice.line?.closingTime);
        const now = Date.now();
        if (lineCloses - now < 0) {
          addValidationError("Line has closed. No more bets.");
        }
      }
      const contest = typedChoice.line?.contest;
      const usersBets = await lists.Bet.findMany({
        where: {
          user: { id: { equals: userId } },
          choice: { line: { contest: { id: { equals: contest?.id } } } }
        },
        query: graphql4`
          id
          isSuper
        `
      });
      const normalBetLimit = contest?.ruleSet?.maxBets || 0;
      const usersCurrentBets = usersBets.length || 0;
      if (operation === "create" && (usersCurrentBets === normalBetLimit || usersCurrentBets > normalBetLimit)) {
        addValidationError("User is out of bets.");
      }
      const normalSuperBetLimt = contest?.ruleSet?.maxSuperBets || 0;
      const usersCurrentSuperBets = usersBets.filter((b) => b.isSuper).length || 0;
      if (operation === "create" && resolvedData.isSuper && (usersCurrentSuperBets === normalSuperBetLimt || usersCurrentSuperBets > normalSuperBetLimt)) {
        addValidationError("User is out of super bets.");
      }
      if (operation === "update") {
        const betBeingUpdated = usersBets.find((b) => b.id === resolvedData.id);
        if (betBeingUpdated?.isSuper !== resolvedData.isSuper) {
          addValidationError("Cannot change bet type in update.");
        }
      }
    }
  }
});

// schemas/Registration.ts
var import_fields7 = require("@keystone-6/core/fields");
var import_core7 = require("@keystone-6/core");
var Registration = (0, import_core7.list)({
  access: {
    operation: {
      query: () => true,
      delete: isSignedIn,
      create: isSignedIn,
      update: isAdmin
    }
  },
  fields: {
    hasPaid: (0, import_fields7.checkbox)({
      defaultValue: false,
      access: {
        read: () => true,
        update: isAdmin
      }
    }),
    isPremium: (0, import_fields7.checkbox)({
      defaultValue: false,
      access: {
        read: () => true,
        update: isAdmin
      }
    }),
    contest: (0, import_fields7.relationship)({ ref: "Contest.registrations", many: false }),
    user: (0, import_fields7.relationship)({ ref: "User.registrations", many: false }),
    counts: (0, import_fields7.virtual)({
      field: import_core7.graphql.field({
        type: import_core7.graphql.object()({
          name: "PointCounts",
          fields: {
            locked: import_core7.graphql.field({ type: import_core7.graphql.Int }),
            likely: import_core7.graphql.field({ type: import_core7.graphql.Int }),
            possible: import_core7.graphql.field({ type: import_core7.graphql.Int }),
            tiebreaker: import_core7.graphql.field({ type: import_core7.graphql.Float })
          }
        }),
        async resolve(item, _args, _context) {
          console.log("starting");
          const context = _context;
          const graphql4 = String.raw;
          if (cache[item.contestId] && cache[item.contestId][item.userId]) {
            return cache[item.contestId][item.userId];
          }
          const contestLines = await context.query.Line.findMany({
            where: { contest: { id: { equals: item.contestId || "" } } },
            query: graphql4`
              id
              title
              benchmark
              standings(orderBy: { gamesPlayed: desc }, take: 1) {
                id
                wins
                gamesPlayed
                totalGames
              }
              choices {
                selection
                status
                bets {
                  id
                  isSuper
                  user {
                    id
                  }
                }
              }
            `
          });
          let locked = 0;
          let likely = 0;
          let possible = 0;
          let tiebreaker = 0;
          contestLines?.forEach((line) => {
            line.choices?.forEach((choice) => {
              let lineDiff = 0;
              const usersBet = choice.bets?.find((bet) => bet?.user?.id === item.userId);
              if (usersBet) {
                const points = usersBet.isSuper ? 2 : 1;
                const standing = line.standings?.[0];
                if (standing) {
                  const totalGames = line.standings?.[0].totalGames || 0;
                  const gamesPlayed = line.standings?.[0].gamesPlayed || 0;
                  const wins = line.standings?.[0].wins || 0;
                  const winPercentage = wins / (gamesPlayed || 1);
                  const projectedWins = Math.round(winPercentage * totalGames);
                  const benchmark = line.benchmark || 0;
                  lineDiff = Math.abs(projectedWins - benchmark);
                }
                if (choice.status === "WON" /* Won */) {
                  locked += points;
                  likely += points;
                  possible += points;
                  tiebreaker += lineDiff;
                }
                if (choice.status === "WINNING" /* Winning */) {
                  likely += points;
                  possible += points;
                  tiebreaker += lineDiff;
                }
                if (choice.status === "LOSING" /* Losing */) {
                  possible += points;
                  tiebreaker = tiebreaker - lineDiff;
                }
                if (choice.status === "LOST" /* Lost */) {
                  tiebreaker = tiebreaker - lineDiff;
                }
                if (choice.status === "NOT_STARTED" /* NotStarted */) {
                  possible += points;
                }
              }
            });
          });
          if (!cache[item.contestId]) {
            cache[item.contestId] = {};
          }
          cache[item.contestId][item.userId] = {
            locked,
            likely,
            possible,
            tiebreaker
          };
          console.log(
            `set the queue for ${item.contestId},${item.userId}: ${locked},${likely},${possible},${tiebreaker}`
          );
          return {
            locked,
            likely,
            possible,
            tiebreaker
          };
        }
      }),
      ui: { query: "{ locked likely possible tiebreaker }" }
    })
  },
  hooks: {
    validateInput: async (args) => {
      const { resolvedData, addValidationError, context } = args;
      const lists = context.query;
      const graphql4 = String.raw;
      const session = context.session;
      if (session.data.isAdmin) {
        return;
      }
      if (resolvedData.user?.connect?.id !== session?.data?.id) {
        addValidationError("Can only create registration for own account");
      }
      const requestedContest = await lists.Contest.findOne({
        where: { id: resolvedData.contest?.connect?.id },
        query: graphql4`
            id
            status
          `
      });
      if (requestedContest.status !== "OPEN") {
        addValidationError("The contest is closed");
      }
      const duplicateRegistrations = await lists.Registration.findMany({
        where: {
          contest: { id: { equals: resolvedData.contest?.connect?.id } },
          user: { id: { equals: session?.data?.id } }
        },
        query: graphql4`
            id
          `
      });
      if (duplicateRegistrations.length !== 0) {
        addValidationError("Cannot register for same contest twice");
      }
    },
    validateDelete: async (args) => {
      const { item, addValidationError, context } = args;
      const lists = context.query;
      const graphql4 = String.raw;
      const session = context.session;
      if (session.data.isAdmin) {
        return;
      }
      if (item.userId !== session.data?.id) {
        addValidationError("Can only delete your own contest");
      }
      const requestedContest = await lists.Contest.findOne({
        where: { id: item.contestId },
        query: graphql4`
            id
            status
          `
      });
      if (requestedContest.status !== "OPEN") {
        addValidationError("The contest is closed. Cannot leave contest.");
      }
    }
  },
  ui: {
    listView: {
      initialColumns: ["id", "user", "hasPaid", "contest"]
    }
  }
});

// schemas/RuleSet.ts
var import_fields8 = require("@keystone-6/core/fields");
var import_core8 = require("@keystone-6/core");
var RuleSet = (0, import_core8.list)({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    maxBets: (0, import_fields8.integer)(),
    maxSuperBets: (0, import_fields8.integer)(),
    superBetPointCount: (0, import_fields8.integer)(),
    contest: (0, import_fields8.relationship)({ ref: "Contest.ruleSet", many: false })
  }
});

// schemas/Standing.ts
var import_fields9 = require("@keystone-6/core/fields");
var import_core9 = require("@keystone-6/core");
var Standing = (0, import_core9.list)({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    gamesPlayed: (0, import_fields9.integer)({ validation: { isRequired: true } }),
    wins: (0, import_fields9.integer)({ validation: { isRequired: true } }),
    totalGames: (0, import_fields9.integer)({ validation: { isRequired: true } }),
    line: (0, import_fields9.relationship)({ ref: "Line.standings", many: false })
  }
});

// schemas/History.ts
var import_fields10 = require("@keystone-6/core/fields");
var import_core10 = require("@keystone-6/core");
var History = (0, import_core10.list)({
  access: {
    operation: {
      create: isAdmin,
      query: () => true,
      update: isAdmin,
      delete: isAdmin
    }
  },
  fields: {
    display: (0, import_fields10.text)({ validation: { isRequired: true } }),
    contestType: (0, import_fields10.select)({
      type: "enum",
      options: [
        { label: "NBA Over Under", value: "NBA_OVER_UNDER" /* NBA_OVER_UNDER */ },
        { label: "NFL Over Under", value: "NFL_OVER_UNDER" /* NFL_OVER_UNDER */ },
        { label: "NFL ATS", value: "NFL_ATS" /* NFL_ATS */ },
        { label: "NFL Playoffs", value: "NBA_PLAYOFFS" /* NBA_PLAYOFFS */ }
      ],
      validation: {
        isRequired: true
      }
    }),
    year: (0, import_fields10.integer)({ validation: { isRequired: true } }),
    user: (0, import_fields10.relationship)({ ref: "User.histories", many: false })
  }
});

// keystone.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("The SESSION_SECRET environment variable must be set in production");
  } else {
    sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
  }
}
var sessionMaxAge = 60 * 60 * 24 * 30;
var auth = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: `id isAdmin`,
  initFirstItem: {
    fields: ["name", "userName", "email", "password"]
  },
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity);
    }
  }
});
var frontendUrl = process.env.FRONTEND_URL;
if (!frontendUrl) {
  throw new Error(`Where's your FRONTEND_URL dude`);
}
var keystone_default = auth.withAuth(
  (0, import_core11.config)({
    server: {
      cors: {
        origin: [frontendUrl],
        credentials: true
      }
    },
    db: {
      provider: "postgresql",
      url: `${process.env.DATABASE_URL}?pool_timeout=0` || "postgres://localhost:5432/contest",
      async onConnect() {
        import_node_cron.default.schedule("0 0 14 * * *", () => {
          Object.keys(cache).forEach((k) => {
            cache[k] = null;
          });
          console.log("NO CRON JOBS SCHEDULED");
        });
        if (process.argv.includes("--seed-data")) {
          console.log("NO SEED DATA");
        }
      }
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data
    },
    lists: {
      Bet,
      Choice,
      CloudImage,
      Contest,
      History,
      Line,
      Registration,
      RuleSet,
      Standing,
      User
    },
    session: (0, import_session.statelessSessions)({
      maxAge: sessionMaxAge,
      secret: sessionSecret
    })
  })
);
//# sourceMappingURL=config.js.map
