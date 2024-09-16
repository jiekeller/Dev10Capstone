package learn.examples;

import org.apache.lucene.document.*;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.index.*;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.similarities.ClassicSimilarity;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.RAMDirectory;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.util.BytesRef;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class LuceneTFIDFExample {

    // Helper method to index the document and store term vectors
    private static void indexDoc(IndexWriter writer, String content) throws IOException {
        Document doc = new Document();

        // Define a field type that stores term vectors
        FieldType fieldType = new FieldType();
        fieldType.setIndexOptions(IndexOptions.DOCS_AND_FREQS_AND_POSITIONS);
        fieldType.setStoreTermVectors(true);  // Enable term vectors
        fieldType.setStoreTermVectorPositions(true);  // Store term positions
        fieldType.setStoreTermVectorOffsets(true);  // Store term offsets
        fieldType.setStored(true);  // Store the field value

        // Add the field with the term vectors enabled
        doc.add(new Field("content", content, fieldType));
        writer.addDocument(doc);
    }

    public static void main(String[] args) throws Exception {
        // Sample texts
        String text1 = """
                When Do Hippos PlaY?
                                                             \s
                                                             
                                                             By the African river, know as the Nile,
                                                             
                                                             The sun fell away and it rested a while.
                                                             
                                                             \s
                                                             
                                                             The rhinos had braved all the smoldering heat.
                                                             
                                                             They lay down to sleep as they wiped off their feet.
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             The elephants marched to their elephant beds,
                                                             
                                                             And gently they rested their elephant heads.
                                                             
                                                             \s
                                                             
                                                             The hippos went bathing in cool, shallow pools,
                                                             
                                                             Thinking the rhinos and elephants fools.
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             Slowly the hippos sank into the river,
                                                             
                                                             The water so cold that it gave them a shiver.
                                                             
                                                             \s
                                                             
                                                             (Hippos can't swim, like the pelicans think.
                                                             
                                                             They also can't float- they could easily sink.)
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             Underwater, they fell to the soft river bed,
                                                             
                                                             On darkish green plants with a smidgen of red.
                                                             
                                                             \s
                                                             
                                                             They strolled on the bottom, then bounced up for air.
                                                             
                                                             They did it for hours, without any care.
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             The fish followed closely, and wove in an out,
                                                             
                                                             Under their belly, and up to their snout.
                                                             
                                                             \s
                                                             
                                                             Each of the hippos came up to the shore,
                                                             
                                                             To feed on the grass by the river once more.
                                                             
                                                             \s
                                                             
                                                             They dried off their bodies by shaking and stomping,
                                                             
                                                             And took bites of grass, chewing and chomping.
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             With night fading fast, they were full from the feast.
                                                             
                                                             The sun returned back, rising up from the east.
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             The hippos crept off to collapse for the day,
                                                             
                                                             While rhinos and elephants got up to play.
                                                             
                                                             \s
                                                             
                                                             \s
                                                             
                                                             Enjoying the warmth of the sun and its light,
                                                             
                                                             Never knowing the story of hippos at night.                
                """;
        String text2 = "hippo";

        // Step 1: Create an in-memory Lucene index
        Directory directory = new RAMDirectory();
        Analyzer analyzer = new StandardAnalyzer();
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter writer = new IndexWriter(directory, config);

        // Index both documents
        indexDoc(writer, text1);
        indexDoc(writer, text2);
        writer.close();

        // Step 2: Calculate TF-IDF using Lucene's Similarity feature
        IndexReader reader = DirectoryReader.open(directory);
        IndexSearcher searcher = new IndexSearcher(reader);

        Map<String, Double> vector1 = getTFIDFVector(searcher, reader, 0);  // for text1
        Map<String, Double> vector2 = getTFIDFVector(searcher, reader, 1);  // for text2

        reader.close();
        directory.close();

        // Step 3: Convert the vectors into arrays and compute cosine similarity
        double cosineSim = computeCosineSimilarity(vector1, vector2);
        System.out.println("Cosine Similarity: " + cosineSim);
    }

    // Method to get the TF-IDF vector for a document
    public static Map<String, Double> getTFIDFVector(IndexSearcher searcher, IndexReader reader, int docId) throws IOException {
        ClassicSimilarity similarity = new ClassicSimilarity();  // TF-IDF Similarity
        Map<String, Double> tfidfVector = new HashMap<>();

        Terms terms = reader.getTermVector(docId, "content");  // Extract terms from document
        if (terms == null) {
            throw new IOException("No term vectors found for document with id: " + docId);
        }
        TermsEnum termsEnum = terms.iterator();

        BytesRef term;
        while ((term = termsEnum.next()) != null) {
            String termText = term.utf8ToString();  // Convert term to string
            long termFreq = termsEnum.totalTermFreq();  // Get term frequency in this doc

            // Compute TF-IDF score
            float tf = similarity.tf(termFreq);
            float idf = similarity.idf(reader.docFreq(new Term("content", termText)), reader.numDocs());
            double tfidf = tf * idf;

            tfidfVector.put(termText, tfidf);  // Store TF-IDF score in the vector
        }
        return tfidfVector;
    }

    // Method to compute cosine similarity between two vectors
    public static double computeCosineSimilarity(Map<String, Double> vectorA, Map<String, Double> vectorB) {
        // Get dot product
        double dotProduct = 0.0;
        for (String key : vectorA.keySet()) {
            if (vectorB.containsKey(key)) {
                dotProduct += vectorA.get(key) * vectorB.get(key);
            }
        }

        // Get the magnitudes of both vectors
        double magnitudeA = 0.0;
        double magnitudeB = 0.0;

        for (double value : vectorA.values()) {
            magnitudeA += value * value;
        }
        for (double value : vectorB.values()) {
            magnitudeB += value * value;
        }

        magnitudeA = Math.sqrt(magnitudeA);
        magnitudeB = Math.sqrt(magnitudeB);

        // Return cosine similarity
        if (magnitudeA == 0 || magnitudeB == 0) {
            return 0.0;  // Edge case: one vector is zero
        }
        return dotProduct / (magnitudeA * magnitudeB);
    }
}
