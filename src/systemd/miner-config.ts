export const MINER_CONFIG_SERVICE = `[Unit]
Description=Miner Configuration
After=multi-user.target

[Service]
Type=forking
ExecStart=/usr/local/bin/miner-config &

[Install]
WantedBy=multi-user.target`;

export const MINER_CONFIG_SCRIPT_HEADER = `#!/bin/bash
sleep 3`;
