import asyncio
import os
import json
import random
import secrets
import shutil
import uuid
from PIL import Image

import discord
from discord import Intents
from discord.ext import commands
from discord.ext.commands import CommandNotFound, MissingRequiredArgument, CommandInvokeError

TOKEN = ""

client = commands.Bot(command_prefix=".", intents=Intents.all())
client.remove_command("help")


@client.event
async def on_connect():
    print("I have established a connection to discord :3")


@client.event
async def on_ready():
    print("I am fully ready for operation!~")


@client.event
async def on_command_error(ctx, err):
    if isinstance(err, CommandNotFound):
        return
    if isinstance(err, MissingRequiredArgument):
        embedvar = discord.Embed(title="Decoder-Chan!~", description=ctx.author.mention, color=0x2ca9bf)
        embedvar.add_field(name="COMMAND FAILED",
                           value="**Hello user!!, you are missing a required argument! Please read .help for usage on this command~**",
                           inline=False)
        await ctx.send(embed=embedvar)
        return
    if isinstance(err, CommandInvokeError):
        embedvar = discord.Embed(title="Decoder-Chan!~", description=ctx.author.mention, color=0x2ca9bf)
        embedvar.add_field(name="COMMAND FAILED",
                           value="**Uh oh, an unexpected error has occurred, if you believe there is an issue, please dm Kaid#0001 immediately!!**",
                           inline=False)
        await ctx.send(embed=embedvar)
        print(err)
        return
    raise err


@client.command()
async def help(ctx):
    embedvar = discord.Embed(title="Decoder-Chan!~", description=ctx.author.mention, color=0x2ca9bf)
    embedvar.add_field(name="[ COMMANDS ]",
                       value="**IMPORTANT SERVER COMMANDS:**\n\n.help - shows a list of all the bots commands (this list)\n.decode - decodes asset antilog!!\n.issues - list of issues with the decoder that I know of\n.report [\"ISSUE\"] - Adds issue to .issues",
                       inline=False)
    embedvar.set_footer(
        icon_url="https://cdn.discordapp.com/avatars/929739576434630687/504dcb36060cd96f341bd02bc1a66e13.png?size=128",
        text="Miku's so cuteee <3")
    await ctx.send(embed=embedvar)


with open('issues.json', 'r') as openfile:
    issuesJson = json.load(openfile)


@client.command(aliases=["REPORT"])
async def report(ctx,issue):
    if ctx.message.channel.id == 974494704756469821:
        with open("issues.json", "w") as outfile:
            global issuesJson
            issuesJson.update({str(uuid.uuid4()): issue.replace("`","`​").replace("@","@​") + " | " + str(ctx.message.author.id)})
            json.dump(issuesJson, outfile)
            await ctx.send("Reported issue, see it in .issues!!\n```yaml\nABUSE OF THIS FEATURE IS NOT TOLERATED AND WILL GET YOU BANNED:\n```")
    else:
        ctx.send("Please use this in #report-issues")


@client.command()
async def issues(ctx):
    issueString = ""
    for issue in issuesJson.items():
        issueString += "\n" + issue[1]

    embedvar = discord.Embed(title="Decoder-Chan!~", description=ctx.author.mention, color=0x2ca9bf)
    embedvar.add_field(name="[ ISSUES ]",
                       value="```yaml\nCurrently_Known_Issues:" + issueString + "\n```",
                       inline=False)
    embedvar.set_footer(
        icon_url="https://cdn.discordapp.com/avatars/929739576434630687/504dcb36060cd96f341bd02bc1a66e13.png?size=128",
        text="Miku's so cuteee <3")
    await ctx.send(embed=embedvar)


@client.command(aliases=["DECODE", "decoder", "DECODER"])
async def decode(ctx,antilog=""):
    verifiedrole = discord.utils.find(lambda r: r.id == 972734818045534248, ctx.message.guild.roles)
    if verifiedrole in ctx.message.author.roles:
        if not ctx.message.attachments and antilog == "":
            embedvar = discord.Embed(title="Decoder-Chan!~", description=ctx.author.mention, color=0x2ca9bf)
            embedvar.add_field(name="COMMAND FAILED",
                               value="**Please attach a file or include antilog in message!~**",
                               inline=False)
            await ctx.send(embed=embedvar)
            return
        try:
            shutil.rmtree("cracking")
            os.makedirs("cracking")
        except OSError:
            pass
        await ctx.send("Decoding Antilog...")
        if antilog != "":
            antilog = ctx.message.content[8:]
            f = open("cracking/antilog.txt", "w")
            f.write(antilog)
            f.close()
        else:
            await ctx.message.attachments[0].save("cracking/antilog.txt")
        staffrole = discord.utils.find(lambda r: r.name == "Catgirl", ctx.message.guild.roles)
        if staffrole in ctx.message.author.roles:
            os.system("node decoder.js uwu")
        else:
            os.system("node decoder.js owo")
        embedvar = discord.Embed(title="Decoder-Chan!~", description=ctx.author.mention, color=0x2ca9bf)
        embedvar.add_field(name="COMMAND SUCCESS",
                           value="**Successfully decoded audio!!!!**",
                           inline=False)
        await ctx.send(embed=embedvar,
                       file=discord.File("cracking/result.txt"))
    else:
        await ctx.send("Please .verify in <#974501286609305690> first!!!!!")


client.run(TOKEN)


#uwu hi :3 x3 :p :D :) :33333