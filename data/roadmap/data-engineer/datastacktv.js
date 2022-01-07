const dataEngineer = {
    author: "datastacktv",
    updated: "2021-04-10",
    source: "https://github.com/datastacktv/data-engineer-roadmap",
    roadmap: "Data Engineer",
    step: [
        {
            no: 1,
            data: {
                "CS Fundamentals": [
                    "How does the computer works ?",
                    "How does the internet work ?",
                    "Git -- Version Control",
                    "Basic Terminal Usage",
                    "Data structured & algorithms",
                    "API",
                    "REST",
                    "Structured & unstructured data",
                    "Linux",
                    "Serialisation",
                    "Math & Statistics"
                ],
                extends: {
                    Linux: ["Vim", "CLI", "Shell Scripting", "Cronjobs"]
                }
            }
        },
        {
            no: 2,
            data: {
                "Learn a Programming Language": ["Python", "Java", "Scala", "Go"]
            }
        },
        {
            no: 3,
            data: {
                "Testing": ["Unit testing", "Integration testing", "Functional testing"]
            }
        },
        {
            no: 4,
            data: {
                "Database Fundamentals": [
                    "SQL",
                    "Normalisation",
                    "ACID transactions",
                    "CAP theorem",
                    "OLTP vs OLAP",
                    "Horizontal vs vertical scaling",
                    "Dimensional modeling"
                ]
            }
        },
        {
            no: 5,
            data: {
                "Relational Databases": ["MySQL", "PostgreSQL", "MariaDB", "Amazon Aurora"]
            }
        },
        {
            no: 6,
            data: {
                "Non-relational databases": ["Document", "Wide column", "Graph", "Key-value"],
                extends: {
                    "Document": ["MongoDB", "Elasticsearch", "Apache CouchDB", "Azure CosmosDB"],
                    "Wide column": ["Apache Cassandra", "Apache HBase", "Google Bigtable"],
                    "Graph": ["Neo4j", "Amazon Neptune"],
                    "Key-value": ["Redis", "Memcached/Solr", "Amazon DynamoDB"]
                }
            }
        },
        {
            no: 7,
            data: {
                "Data warehouse": ["Snowflake", "Presto", "Apache Hive", "Apache Impala", "Amazon Redshift", "Google BigQuery", "Azure Synapse", "ClickHouse"]
            }
        },
        {
            no: 8,
            data: {
                "Object storage": ["AWS S3", "Azure Blob Storage", "Google Cloud Storage"]
            }
        },
        {
            no: 9,
            data: {
                "Cluster computing fundamentals": ["Apache Hadoop", "HDFS", "MapReduce", "Lambda & Kappa architecture", "Managed Hadoop", "Amazon EMR", "Google Dataproc", "Azure Data Lake"]
            }
        },
        {
            no: 10,
            data: {
                "Data processing": ["Batch", "Hybrid", "Streaming"],
                extends: {
                    "Batch": ["Apache Pig", "Apache Arrow", "data build tool"],
                    "Hybrid": ["Apache Spark", "Apache Beam", "Apache Flink", "Apache NiFi"],
                    "Streaming": ["Apache Kafka", "Apache Storm", "Apache Samza", "Amazon Kinesis"]
                }
            }
        },
        {
            no: 11,
            data: {
                Messaging: ["Amazon SNS & SQS", "Google PubSub", "Azure Service Bus", "RabbitMQ", "Apache ActiveMQ"]
            }
        },
        {
            no: 12,
            data: {
                "Workflow scheduling": ["Apache Airflow", "Google Composer", "Apache Oozie", "Luigi"]
            }
        },
        {
            no: 13,
            data: {
                "Monitoring data pipelines": ["Prometheus", "Datadog", "Sentry", "StatsD"]
            }
        },
        {
            no: 14,
            data: {
                Networking: ["Protocols", "Firewalls", "VPN", "VPC", "HTTP/HTTPS", "TCP", "SSH", "IP", "DNS"]
            }
        },
        {
            no: 15,
            data: {
                "Infrastructure as Code": ["Containers", "Container orchestration", "Infrastructure provisioning"],
                extends: {
                    Containers: ["Docker", "LXC"],
                    "Container orchestration": ["Kubernetes", "Docker Swarm", "Apache Mesos", "GKE"],
                    "Infrastructure provisioning": ["Terraform", "Pulumi", "AWS CDK"]
                }
            }
        },
        {
            no: 16,
            data: {
                "CI/CD": ["Github Actions", "Jenkins"]
            }
        },
        {
            no: 17,
            data: {
                "Identity and access management": ["Active Directory", "Azure Active Directory"]
            }
        },
        {
            no: 18,
            data: {
                "Data security & privacy": ["Legal compliance", "Encryption", "Key management", "Data governance & integrity"]
            }
        },
        {
            no: 19,
            data: {
                "Visualise data": ["Tableau", "Looker", "Grafana", "Jupyter Notebook", "Microsoft Power BI"]
            }
        },
        {
            no: 20,
            data: {
                "Machine Learning Fundamentals": ["Terminology", "scikit-learn", "Tensorflow", "Keras", "PyTorch"],
                extends: {
                    "Terminology": ["Supervised vs unsupervised learning", "Classification vs regression", "Evaluation metrics"]
                }
            }
        },
        {
            no: 21,
            data: {
                "Machine Learning Ops": ["Tensorflow Extended", "Kubeflow", "MLflow", "Amazon SageMaker", "Google AI Platform"]
            }
        }
    ]
}